import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-dashboard',
  templateUrl: './date-dashboard.component.html',
  styleUrls: ['./date-dashboard.component.scss'],
})
export class DateDashboardComponent implements OnInit {
  dateForm = new FormGroup({
    day: new FormControl('', [Validators.required, Validators.minLength(2)]),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
