import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from '../app/employee/employee.component';
import {FruitComponent} from '../app/fruit/fruit.component';
import {HomeComponent} from '../app/home/home.component';
import {ContactComponent} from '../app/contact/contact.component';
import {CarsComponent} from '../app/cars/cars.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent},
  {path: 'fruits', component: FruitComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cars', component: CarsComponent},
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
