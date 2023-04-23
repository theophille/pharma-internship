import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[phone]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}]
})
export class PhoneValidatorDirective implements Validator {
  @Input('phone') toBeValidated: boolean;
  
  validate(control: AbstractControl): ValidationErrors | null {
    if(this.toBeValidated) {
      const phoneRegex = /^\d{10}$/;
      const result = phoneRegex.test(control.value);
      return result ? null : {phone: {value: control.value}};
    } else {
      return null;
    }
  }
}
