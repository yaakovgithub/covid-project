import { Injectable } from '@angular/core';
import {Stat} from './stat'
import {List} from './mock-numbers'
import {forkJoin, observable, Observable,of,interval,TimeInterval} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'console';
import { isPromise, visitValue } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private chosenUrl='';
  private arr: Stat[] = [];
  private loading:boolean;
  private country:Object[]=[];//was just stat before 
  check:any;
  temp:Object[];
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
    this.temp=[];
   // this.show();
   }
   initil():Observable<Stat[]>
   {
     console.log("loaded");
    return of(this.arr);
   }
  getList():Observable<Stat[]>
  {
    this.arr=[];
    this.http.get<Stat[]>(this.ur,this.headr).toPromise().then(data=>this.arr.push(data[0]));
   // this.http.get<Stat>(this.ur,this.headr).toPromise().then(data=>this.arr.push(data));// THIS IS A EXAPLE OF WHY U NEED IT TO BEE ARRAY TYPE NOT JUST STAT TYPE WHY THOUGH?
      //this.http.get<Stat[]>(this.ur,this.headr).subscribe(data=>this.arr.push(data[0]));
     // return this.http.get<Stat[]>(this.ur,this.headr);//.subscribe(data=>this.arr[0]=data[0]);///put let variable =this.http instead of return and still works somehow how  is this working
      //also check why didnet need the subscribe
   
    
    
   
    setTimeout(() => {
      console.log('sleep');
      this.http.get<Stat[]>(this.ur1+'USA',this.headr).toPromise().then(data=>this.arr.push(data[0]));
      //this.http.get<Stat[]>(this.ur1+'USA',this.headr).subscribe(data=>this.arr.push(data[0]));
     // return this.http.get<Stat[]>(this.ur1+'USA',this.headr);//.subscribe(data=>this.arr[1]=data[0]); //why does the code continue even if i use this line of code
      // And any other code that should run only after 5s
    }, 2500);
    //this.arr=[]; why doesnt it maatter if this is here or first line of func ????????
   
   return of(this.arr);
    //var ass=[this.arr[0],this.arr[1]];
    
     // return of(this.arr);
    
   
  }
  getStat(name:string):Observable<Stat[]>
  {
    const trythis1=this.ur1+name;
    return this.http.get<Stat[]>(trythis1,this.headr);//why  does this have to be array type
  }

  findtemp(name:string):Observable<Stat[]>{
    
   
    this.http.get<Object[]>("https://covid-19-data.p.rapidapi.com/help/countries",this.headr).toPromise().
    then(res=>
      {
        
        for (let index = 0; index < res.length; index++) {
          if(res[index].name==name)
          {
            
            console.log("change3d");
            this.addcountry(name);//added
           // return of(this.arr);
           return this.arr;
            setTimeout(() => {
              return of(1);
            }, 1500);
            return of(1);
          }
         
        }
      return this.arr//added
      }
    );
//return false;
return of(this.arr);
setTimeout(() => {
  return of(0);
}, 3000);
  return of(0);
  }
  addcountry(name:string): Observable<Stat[]>
  {
    setTimeout(() => {
      this.http.get<Stat[]>(this.ur1+name,this.headr).subscribe(data=>this.arr.push(data[0]));
    
    }, 1500);
   return of(this.arr);
  }
  delete(name:string):Observable<Stat[]>
  {
    this.arr= this.arr.filter(country=>country.country!=name);
    return of(this.arr);
  }
  
  getStat1(name:string):Observable<Stat[]>
  {
   // const trythis1=this.ur1+name;
    return this.http.get<Stat[]>("https://covid-19-data.p.rapidapi.com/totals",this.headr);//why does this have to be array type
  }
  findtemp12(name:string):Observable<Stat[]>{
   
    for (let index = 0; index < this.country.length; index++) {
     // console.log(this.country[index]);
      if(this.country[index].name==name)
      {
        this.addcountry12(name);
        return of(this.arr);
      }
      
    }
    return of(this.arr);
  
  }
  initcountrylist()
  {
    if(this.country.length==0)
    {
      
    this.http.get<Object[]>("https://covid-19-data.p.rapidapi.com/help/countries",this.headr).toPromise().then(res=>this.country=res);
    }
  }
  addcountry12(name:string): Observable<Stat[]>
  {
    
      this.http.get<Stat[]>(this.ur1+name,this.headr).subscribe(data=>this.arr.push(data[0]));
    
    
   return of(this.arr);
  }
  searchcountries(name:string):Observable<string[]>
  {

    let r:string[]=[];
    if(name.length==0)
    {
      return of(r);
    }
    let l=this.country.filter(x=>x.name.includes(name));
    for (let index = 0; index < l.length; index++) {
      r[index]=l[index].name;
      
    }
    return of(r);
    //return of(this.country.filter(x.name=>x.name.includes(name)));
  }
}
