import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

export function dayValidator(): ValidatorFn {
  const validator = new DayValidatorDirective();
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validator.validate(control);
  };
}

@Directive({
  selector: '[appDayValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DayValidatorDirective, multi: true },
  ],
})
export class DayValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    const day = Number(control.value);
    if (isNaN(day) || day < 1 || day > 31) {
      return { invalidDay: true };
    }
    return null;
  }
}


