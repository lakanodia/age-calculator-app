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
  isValidDate!: null;

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
      console.log(this.ageForm.value);
    } else {
      alert('Date Is Not Valid');
    }
  }
}
