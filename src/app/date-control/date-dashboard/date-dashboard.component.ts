import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dayValidator } from 'src/app/directives/day-validator.directive';
import { monthValidator } from 'src/app/directives/month-validator.directive';
import { yearValidator } from 'src/app/directives/year-validator.directive';

@Component({
  selector: 'app-date-dashboard',
  templateUrl: './date-dashboard.component.html',
  styleUrls: ['./date-dashboard.component.scss'],
})
export class DateDashboardComponent implements OnInit {
  constructor() {}

  ageForm = new FormGroup({
    day: new FormControl('', [Validators.required, dayValidator()]),
    month: new FormControl('', [Validators.required, monthValidator()]),
    year: new FormControl('', [Validators.required, yearValidator()]),
  });

  get day() {
    return this.ageForm.get('day') as FormControl;
  }

  get month() {
    return this.ageForm.get('month') as FormControl;
  }

  get year() {
    return this.ageForm.get('year') as FormControl;
  }

  ngOnInit(): void {
    console.log(this.day.valid);
  }
}
