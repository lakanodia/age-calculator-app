import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    const day = Number(control.value);
    const month = Number(control.root.get('month')?.value);
    const year = Number(control.root.get('year')?.value);
    const maxDays = new Date(year, month, 0).getDate(); // get the maximum number of days for the given month and year

    if (!isNaN(day) && day > 0 && day <= maxDays) {
      return null; // valid
    }
    return { invalidDate: true }; // invalid
  }
}

export function invalidDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const day = Number(control.get('day')?.value);
    const month = Number(control.get('month')?.value);
    const year = Number(control.get('year')?.value);
    const maxDays = new Date(year, month, 0).getDate(); // get the maximum number of days for the given month and year

    if (!isNaN(day) && day > 0 && day <= maxDays) {
      return null; // valid
    }
    return { invalidDate: true }; // invalid
  };
}
