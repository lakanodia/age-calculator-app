import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateControlModule } from './date-control/date-control.module';
import { DayValidatorDirective } from './directives/day-validator.directive';

@NgModule({
  declarations: [AppComponent, DayValidatorDirective],
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
