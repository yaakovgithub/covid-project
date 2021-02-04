
import {Stat} from '../stat';
import { Component, OnInit, Input } from '@angular/core';
import { List } from '../mock-numbers';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StatService } from '../stat.service';
import {observable, Observable,of} from 'rxjs'
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
   Stat:Stat;
  constructor( private route: ActivatedRoute,
    private statservice: StatService,
    private location: Location) { }

  ngOnInit(): void {

    this.getStat()
  }
  getStat():void
  {
     const name= this.route.snapshot.paramMap.get('country');
     console.log(name);
    // this.show();
    this.statservice.getStat(name).subscribe(stat=>this.Stat=stat);
    console.log(this.Stat.deaths);
  }
  show():void{
    fetch("https://covid-19-data.p.rapidapi.com/country?name=israel", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "7d65f3a26cmsh1a60ce90e18873fp130986jsn8accfcd17cdb",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      }
    })
  
    .then(response => response.json()).then(data=>  this.Stat=data[0]);
    console.log(this.Stat);
    //return this.check;
  }
}
