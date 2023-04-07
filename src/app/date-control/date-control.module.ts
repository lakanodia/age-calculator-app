import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDashboardComponent } from './date-dashboard/date-dashboard.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AgeResultComponent } from './age-result/age-result.component';

@NgModule({
  declarations: [DateDashboardComponent, AgeResultComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [DateDashboardComponent],
})
export class DateControlModule {}
