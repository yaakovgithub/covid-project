import { Injectable } from '@angular/core';
import {Stat} from './stat'
import {List} from './mock-numbers'
import {observable, Observable,of} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatService {
  private chosenUrl='';
  check:any;
  private dsa:any;
  private ur1='https://covid-19-data.p.rapidapi.com/country?name=';
  private ur='https://covid-19-data.p.rapidapi.com/country?name=israel';
  private headr={
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7d65f3a26cmsh1a60ce90e18873fp130986jsn8accfcd17cdb",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    }
  };
  constructor(  private http: HttpClient) {
   // this.show();
   }
  getList():Observable<Stat[]>
  {
   // this.show();
   // return of(List);
    const headr={
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "7d65f3a26cmsh1a60ce90e18873fp130986jsn8accfcd17cdb",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      }
    };
  //  const ur='https://covid-19-data.p.rapidapi.com/country?name=israel';
   // this.dsa=  this.http.get<Stat[]>(this.ur,this.headr);
    //return this.dsa;
    return this.http.get<Stat[]>(this.ur,this.headr);
      fetch("https://covid-19-data.p.rapidapi.com/country?name=israel", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "7d65f3a26cmsh1a60ce90e18873fp130986jsn8accfcd17cdb",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        }
      })
    
      .then(response => response.json()).then(data=>this.check= <Stat>(data[0]));
      console.log(this.check);
      var check2=this.check;
     
      console.log('recieve');
    //return this.check;
    return this.http.get<Stat[]>(this.ur,headr);
  }
  getStat(name:string):Observable<Stat>
  {
    const url='Country/'+name;
    const trythis=this.ur1+name;
   console.log(this.dsa);
   // return new Observable<Stat>(of(this.dsa[0]));
     this.http.get<Stat[]>(trythis,this.headr).toPromise().then(data=>this.dsa=<Stat>data[0]);
     console.log(this.dsa.deaths);
     return of(this.dsa);
    // return of(this.dsa[0]);
    return of(List.find(stat=>stat.country===name));
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
    //return this.check;
  }
}
