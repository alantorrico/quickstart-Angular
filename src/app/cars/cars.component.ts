import {Component, OnInit} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public car: Car;
  public cars: Car[];

  constructor() {
    this.car = new Car('', '', 0, '');
    this.cars = [
      new Car('Toyota', 'Prado', 653, 'Plata'),
      new Car('Mazda', 'CX9', 122, 'Rojo'),
      new Car('Suzuki', 'Baleno', 123, 'Azul'),
      new Car('Hyundai', 'Santa Fe', 342, 'Blanco')
    ];
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cars.unshift(this.car);
    this.car = new Car('', '', 0, '');
  }

}
