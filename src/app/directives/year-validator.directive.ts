import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function yearValidator(): ValidatorFn {
  const validator = new YearValidatorDirective();
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validator.validate(control);
  };
}

@Directive({
  selector: '[appYearValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: YearValidatorDirective,
      multi: true,
    },
  ],
})
export class YearValidatorDirective {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const year = Number(control.value);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear) {
      return { invalidYear: true };
    }
    if (year > currentYear) {
      return { futureYear: true };
    }
    return null;
  }
  constructor() {}
}
