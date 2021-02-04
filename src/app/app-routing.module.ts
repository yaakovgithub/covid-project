import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatsComponent} from './stats/stats.component';
import {CountryDetailComponent} from './country-detail/country-detail.component'

const routes: Routes = [
  { path: '', component: StatsComponent },
  {path: 'Country/:country',component: CountryDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
