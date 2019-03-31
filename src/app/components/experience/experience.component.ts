import { Component, OnInit } from '@angular/core';
import { ProfilerService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [ProfilerService]

})
export class ExperienceComponent implements OnInit {

  experience : any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getExperience()
    .subscribe(d=>{
      this.experience = d
    });
  }

}
