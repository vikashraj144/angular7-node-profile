import { Component, OnInit } from '@angular/core';
import { ProfilerService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ProfilerService]
})
export class AboutUsComponent implements OnInit {

  leadData: any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getLead()
    .subscribe(d=>{
      this.leadData = d
    });
  }

}
