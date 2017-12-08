import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FruitComponent} from './fruit/fruit.component';
import {EmployeeComponent} from './employee/employee.component';

import {FilterPipe} from '../shared/pipes/filter.pipe';

import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CarsComponent} from './cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    FilterPipe,
    HomeComponent,
    ContactComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
