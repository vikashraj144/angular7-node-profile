import { Component, OnInit } from '@angular/core';
import { ProfilerService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers:[ProfilerService]
})
export class SkillsComponent implements OnInit {

  skills: any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

}
