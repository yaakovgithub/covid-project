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
  private loading:boolean;//added
  list: Stat[] ;
  check:any;
  check2!: Stat;
   bool:number;
  constructor(private statservice:StatService) { 
    this.loading=false;
  this.bool=3;
  //this.getList();
    }
     
  ngOnInit(): void {
    //this.show();
    this.statservice.initil().subscribe(list=>this.list=list);
   // this.getList();
  }
  selectedCountry!: Stat;
onSelect(chosen: Stat): void {
  this.selectedCountry = chosen;
}
show():void{
  
  return;
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
  console.log(this.loading);
  this.loading=true;
  console.log(this.loading);
  console.log('show info');
  this.statservice.getList().subscribe((list)=>{
     this.list=list;
     this.loading=false;
     console.log(this.loading);
    });
    console.log(this.loading);
  console.log(this.list);
  console.log(this.loading);
  console.log('dsa');
  return;



  console.log('show info');
  this.statservice.getList().subscribe(list=> this.list=list);
  console.log(this.list);
  console.log('dsa');
}
add(name: string): void {
  name = name.trim();
  
  if (!name) {console.log("exists"); return; }
  
  console.log(this.bool);
//  this.statservice.findtemp(name).subscribe(()=>this.statservice.addcountry(name).subscribe((added)=>this.list=added));
//this.statservice.findtemp1(name).toPromise().then((added)=>this.list.push(added));        
//this.statservice.findtemp1(name).subscribe((added)=>this.list.push(added));                                                      // use this one showing puish no subscribe findtemp1
//return;
const len=this.list.length;
console.log(this.list.length);
for (let index = 0; index < this.list.length; index++) {
  if(this.list[index].country==name)
  {
    console.log("already exists");
    return ;
  }
  
}
this.statservice.findtemp(name).subscribe((added)=>this.list=added);// why does this not have error cant read subscribe property but the findtemp1 does have error
console.log(this.list.length);
setTimeout(() => {
  if(this.list.length===len)
{
  console.log("incorrect input");
}
}, 2500);

  return;
  setTimeout(() => {
    
    this.bool=g;
  }, 1500);
  
  setTimeout(() => {
    console.log(this.bool);

  }, 1500);
  console.log(this.bool);
  setTimeout(() => {
    if(this.bool===1)
  {
    console.log("working");
    this.statservice.addcountry(name).subscribe((added)=>this.list=added);
    //this.statservice.addcountry(name).s
  }
  console.log("exists");
  }, 9000);
  
}
delete(name:string):void{
  
  console.log(name);
  this.list=this.list.filter(country=>country.country!==name);
  this.statservice.delete(name).subscribe(delete1=>this.list=delete1);
}
}