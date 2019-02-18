import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from "../models/book";
import { Reader } from "../models/reader";
import { LoggerService } from '../core/logger.service';
import { DataService } from '../core/data.service';
import { ProfileError } from '../models/ProfileError';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService) { 
    this.loggerService.log('Creating the dashboard!');
  }

  ngOnInit() {
    this.dataService.getAllBooks().subscribe(
      (data: Book[]) => this.allBooks = data,
      (err) => console.log('erro in getallbook', err),
      () => this.loggerService.log('All done in getAllbook')
    );
    this.dataService.getAllReaders()
      .subscribe(
        (data: Reader[]) => this.allReaders = data,
        (err: ProfileError) => console.log(err.friendlyMessage),
        () => this.loggerService.log('All done getting readers!')
      );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.getAuthorRecommendationAsync(1)
      .catch(err => this.loggerService.error(err));

    this.loggerService.log('Done with dashboard initialization');
  }

  private async getAuthorRecommendationAsync(readerID: number): Promise<void> {
    const author: string = await this.dataService.getAuthorRecommendation(readerID);
    this.loggerService.log(author);
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
