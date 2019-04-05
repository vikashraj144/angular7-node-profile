import { Component, OnInit } from '@angular/core';
import { ProfilerService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers:[ProfilerService]
})
export class EducationComponent implements OnInit {

  education: any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getEducation()
    .subscribe(d=>{
      this.education = d
    });
  }

}
