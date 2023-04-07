import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dayValidator } from 'src/app/directives/day-validator.directive';

@Component({
  selector: 'app-date-dashboard',
  templateUrl: './date-dashboard.component.html',
  styleUrls: ['./date-dashboard.component.scss'],
})
export class DateDashboardComponent implements OnInit {
  ageForm = new FormGroup({
    day: new FormControl(
      '',
      Validators.compose([Validators.required, dayValidator()])
    ),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
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

  constructor() {}

  ngOnInit(): void {
    console.log(this.day.valid);
  }
}
