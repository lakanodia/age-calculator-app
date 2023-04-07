import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { invalidDateValidator } from 'src/app/directives/date-validator.directive';
import { dayValidator } from 'src/app/directives/day-validator.directive';
import { monthValidator } from 'src/app/directives/month-validator.directive';
import { yearValidator } from 'src/app/directives/year-validator.directive';

@Component({
  selector: 'app-date-dashboard',
  templateUrl: './date-dashboard.component.html',
  styleUrls: ['./date-dashboard.component.scss'],
})
export class DateDashboardComponent implements OnInit {
  age: { years: number; months: number; days: number } | undefined;

  constructor() {}

  ageForm = new FormGroup(
    {
      day: new FormControl('', [Validators.required, dayValidator()]),
      month: new FormControl('', [Validators.required, monthValidator()]),
      year: new FormControl('', [Validators.required, yearValidator()]),
    },
    { validators: invalidDateValidator() }
  );

  get day() {
    return this.ageForm.get('day') as FormControl;
  }

  get month() {
    return this.ageForm.get('month') as FormControl;
  }

  get year() {
    return this.ageForm.get('year') as FormControl;
  }

  ngOnInit(): void {}

  calculateAge() {
    if (this.ageForm.valid) {
      const inputDate = new Date(
        this.year.value,
        this.month.value,
        this.day.value
      );
      const diff = Date.now() - inputDate.getTime();
      const ageDate = new Date(diff);
      this.age = {
        years: ageDate.getUTCFullYear() - 1970,
        months: ageDate.getUTCMonth(),
        days: ageDate.getUTCDate() - 1, // Subtract 1 to account for zero-indexed days
      };
    }
  }
}
