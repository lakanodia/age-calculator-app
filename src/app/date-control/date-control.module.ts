import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDashboardComponent } from './date-dashboard/date-dashboard.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateDashboardComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [DateDashboardComponent],
})
export class DateControlModule {}
