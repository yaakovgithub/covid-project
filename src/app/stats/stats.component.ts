import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { getHeapStatistics } from 'v8';
import {Stat} from '../stat';
import {StatByCountry} from '../statbycountry';
import { Observable } from 'rxjs';
import { stat } from 'fs';
import { inject } from '@angular/core/testing';
import {StatService} from '../stat.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  list: Stat[] ;
  check:any;
  check2!: Stat;
  constructor(private statservice:StatService) { 
 
  
    }
     
  ngOnInit(): void {
    //this.show();
    
    this.getList();
  }
  selectedCountry!: Stat;
onSelect(chosen: Stat): void {
  this.selectedCountry = chosen;
}
show():void{
  fetch("https://covid-19-data.p.rapidapi.com/country?name=israel", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7d65f3a26cmsh1a60ce90e18873fp130986jsn8accfcd17cdb",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    }
  })

  .then(response => response.json()).then(data=>this.check= <Stat>(data[0]));
  console.log(this.check);
}

getList():void
{
  console.log('show info');
  this.statservice.getList().subscribe(list=> this.list=list);
  console.log(this.list);
  console.log('dsa');
}


}