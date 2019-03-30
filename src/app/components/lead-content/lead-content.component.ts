import { Component, OnInit } from '@angular/core';

import {ProfilerService} from './../../services/profile.service';

@Component({
  selector: 'app-lead-content',
  templateUrl: './lead-content.component.html',
  styleUrls: ['./lead-content.component.scss'],
  providers: [ProfilerService]
})
export class LeadContentComponent implements OnInit {

  leadData:any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getEducation()
    .subscribe(d=>{
      console.log("data",d);
      this.leadData = d
    });
  }

} 
