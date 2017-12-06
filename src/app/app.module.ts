import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FruitComponent} from './fruit/fruit.component';
import {EmployeeComponent} from './employee/employee.component';

import {FilterPipe} from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
