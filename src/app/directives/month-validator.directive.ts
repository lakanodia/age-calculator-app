import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function monthValidator(): ValidatorFn {
  const validator = new MonthValidatorDirective();
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validator.validate(control);
  };
}

@Directive({
  selector: '[appMonthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MonthValidatorDirective,
      multi: true,
    },
  ],
})
export class MonthValidatorDirective {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    const month = Number(control.value);
    if (isNaN(month) || month < 1 || month > 12) {
      return { invalidMonth: true };
    }
    return null;
  }
}
