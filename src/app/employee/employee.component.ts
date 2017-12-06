import {Component, OnInit} from '@angular/core';

import {Employee} from './Employee';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  public employees: Employee[] = [];
  public status = true;

  constructor() {
    this.buildEmployees();
  }

  ngOnInit() {
  }

  buildEmployees(): void {
    for (let i = 0; i < 30; i++) {
      this.employees.push(new Employee(this.getEmployeeName(), this.getEmployeeAge(), this.getEmployeeStatus()));
    }
  }

  getEmployeeName(): string {
    let text = '';
    for (let i = 0; i < 5; i++) {
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length)).toUpperCase();
    }
    return text;
  }

  getEmployeeAge(): number {
    return Math.floor(Math.random() * (50 - 17)) + 17;
  }

  getEmployeeStatus(): boolean {
    const status: boolean[] = [true, false];
    return status[Math.floor(Math.random() * status.length)];
  }

  toggleStatus(status) {
    this.status = status;
  }
}
