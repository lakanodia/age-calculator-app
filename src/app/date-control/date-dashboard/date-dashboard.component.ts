import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-dashboard',
  templateUrl: './date-dashboard.component.html',
  styleUrls: ['./date-dashboard.component.scss'],
})
export class DateDashboardComponent implements OnInit {
  dateForm = new FormGroup({
    day: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });

  get day() {
    return this.dateForm.get('day') as FormControl;
  }

  get month() {
    return this.dateForm.get('month') as FormControl;
  }

  get year() {
    return this.dateForm.get('year') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.day.valid);
  }
}
