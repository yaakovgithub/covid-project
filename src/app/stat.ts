export interface Stat {
    confirmed:number;
    critical:number;
    deaths:number;
    lastChange:string;
    lastUpdate:string;
    recovered:number;
    country?:string;
    code?:string;
    latitude?:number;
    longitude?:number;
  }