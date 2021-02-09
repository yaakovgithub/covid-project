import { Injectable } from '@angular/core';
import {Stat} from './stat'
import {List} from './mock-numbers'
import {forkJoin, observable, Observable,of} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'console';
import { visitValue } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class StatService {
  private chosenUrl='';
  private arr: Stat[] = [];
  private loading:boolean;
  private country:Stat;
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
    //constructor was empty and working code
    this.arr=[];
    this.loading=false;
   // this.show();
   }
  getList():Observable<Stat[]>
  {
    setTimeout(() => {
      return this.http.get<Stat[]>(this.ur,this.headr);//.subscribe(data=>this.arr[0]=data[0]);///put let variable =this.http instead of return and still works somehow how the hell is this working
      //also check why didnet need the subscribe
    }, 1000);
    
    
   
    setTimeout(() => {
      console.log('sleep');
      return this.http.get<Stat[]>(this.ur1+'USA',this.headr);//.subscribe(data=>this.arr[1]=data[0]);
      // And any other code that should run only after 5s
    }, 3500);
   
    //var ass=[this.arr[0],this.arr[1]];
    
     // return of(this.arr);
    
   
    







    //return of(List);
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
    let first=this.http.get<Stat[]>(this.ur,this.headr).toPromise().then(data=>this.arr[0]=data[0]);
    
   
    setTimeout(() => {
      console.log('sleep');
      let first=this.http.get<Stat[]>(this.ur1+'USA',this.headr).toPromise().then(data=>this.arr[1]=data[0]);
      // And any other code that should run only after 5s
    }, 1500);
   
    var ass=[this.arr[0],this.arr[1]];
    return of(this.arr);
    return of(ass);
    Observable.forkJoin(first,second);
    return new Observable<Stat[]>([first,second]);
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
  getStat(name:string):Observable<Stat[]>
  {
    const trythis1=this.ur1+name;
    return this.http.get<Stat[]>(trythis1,this.headr);//why the hell does this have to be array type












    const url='Country/'+name;
    const trythis=this.ur1+name;
   console.log(this.dsa);
  //  return new Observable<Stat>(of(this.dsa[0]));
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

  async findCountry(name:string):Promise<number>{
    
    //let list=this.http.get<Object[]>("https://covid-19-data.p.rapidapi.com/help/countries",this.headr).forEach(data=>console.log(data[1].hasOwnProperty("name")));
   // this.http.get<Stat>(this.ur1+name,this.headr).toPromise().then(i=>this.country=i.country);
   // list.forEach(data=>console.log(data[0].hasOwnProperty("country")));
   
   await this.checkcountry(name).toPromise().then(v=>this.country=v[0]);
   
    // this.checkcountry(name).subscribe(v=>this.country=v[0]);
    
    console.log(this.country);
    if(this.country.country==name)
    {
      console.log("exists");
      return 1;
    }
    console.log("empty");
    //list.forEach(data=>console.log(data.includes('USA')));
   // list.forEach(data=>console.log(data.find(i=>i.name==='Israel')));
   // list.forEach(data=>console.log(data.some(i=>i.toString().includes('Israel'))));
    //console.log(list);
   // if(list.)
    return 1;
  }
   checkcountry(name:string):Observable<Stat[]>
  {
     return this.http.get<Stat[]>(this.ur1+name,this.headr);
  }
  async findtemp(name:string):Promise<number>{
    let list=await this.http.get<Object[]>("https://covid-19-data.p.rapidapi.com/help/countries",this.headr);
   // list.forEach(data=>console.log(data.find(i=>i.name==='Israel')));
    list.forEach(data=>data.find(i=>i.name==name)).then(()=>console.log("yes")).catch(()=>console.log("no"));
  // list.forEach(data=>console.log(data.some(i=>i.toString().includes('Israel'))));
 // list.forEach(data=>console.log(data.some(data=>data.(i=>i.name==='Israel'))));
   return 1;
  }
}
