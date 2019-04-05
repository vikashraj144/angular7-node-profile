import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Education } from '../models/education';
import { Skills } from '../models/skills';
import { ProfileError } from '../models/ProfileError';
import { Lead } from '../models/lead';
import { Experience } from '../models/experience';
import { Projects } from '../models/projects';

@Injectable()

export class ProfilerService {
    baseUrl = environment.baseUrlLocal;
    constructor(private http: HttpClient) { }

  getEducation(): Observable<Education | ProfileError> {
    return this.http.get<Education>(this.baseUrl + '/assets/json/education.json')
      .pipe(
        catchError(this.handleError)
    );
  }

  getLead(): Observable<Lead | ProfileError>{
    return this.http.get<Lead>(this.baseUrl + '/assets/json/lead.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  getExperience(): Observable<Experience[] | ProfileError>{
    return this.http.get<Experience[]>(this.baseUrl + '/assets/json/experience.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  getSkills(): Observable<Skills[] | ProfileError>{
    return this.http.get<Skills[]>(this.baseUrl + '/assets/json/skills.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  getProject(): Observable<Projects[] | ProfileError>{
    return this.http.get<Projects[]>(this.baseUrl + '/assets/json/projects.json')
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<ProfileError> {
    const dataError = new ProfileError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return throwError(dataError);
  }
}