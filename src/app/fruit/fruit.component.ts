import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})

export class FruitComponent implements OnInit {

  componentName = 'Fruit Component';
  fruits: string [] = ['Orange', 'Apple', 'Pear'];

  constructor() {
    console.log('(constructor)Fruits', this.getFruits());
    /*console.log('Find Index', this.findIndexByName('Apple'));*/
  }

  ngOnInit() {
    console.log('(onInit)Find Index', this.findIndexByName('Apple'));
  }

  getFruits() {
    return this.fruits;
  }

  findIndexByName(name: string): number {
    return this.fruits.findIndex(fruit => fruit === name);
  }
}


