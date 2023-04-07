import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateControlModule } from './date-control/date-control.module';
import { DayValidatorDirective } from './directives/day-validator.directive';
import { MonthValidatorDirective } from './directives/month-validator.directive';
import { YearValidatorDirective } from './directives/year-validator.directive';
import { DateValidatorDirective } from './directives/date-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    DayValidatorDirective,
    MonthValidatorDirective,
    YearValidatorDirective,
    DateValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DateControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
