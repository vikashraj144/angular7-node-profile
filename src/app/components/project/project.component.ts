import { Component, OnInit } from '@angular/core';
import { ProfilerService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProfilerService]

})
export class ProjectComponent implements OnInit {

  projects: any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getProject().subscribe( data => {
      this.projects = data;
    });
  }

}
