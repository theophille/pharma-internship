import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[cnp]',
  providers: [{provide: NG_VALIDATORS, useExisting: CnpValidatorDirective, multi: true}]
})
export class CnpValidatorDirective {
  @Input('cnp') toBeValidated: boolean;
  
  validate(control: AbstractControl): ValidationErrors | null {
    if(this.toBeValidated) {
      const cnpRegex = /^\d{13}$/;
      const result = cnpRegex.test(control.value);      
      return result ? null : {cnp: {value: control.value}};
    } else {
      return null;
    }
  }
}
