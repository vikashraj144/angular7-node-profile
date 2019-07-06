import { Component, OnInit } from '@angular/core';
import {ProfilerService} from './../services/profile.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [ProfilerService]
  
})
export class CountryComponent implements OnInit {

  country:any;
  constructor(private profilerService: ProfilerService) { }

  ngOnInit() {
    this.profilerService.getCountry()
    .subscribe(d=>{
      console.log("data",d);
      this.country = d
    });    
  }

}
