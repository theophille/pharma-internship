import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[positiveNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: PositiveNumberValidatorDirective, multi: true}]
})
export class PositiveNumberValidatorDirective {
  @Input('positiveNumber') toBeValidated: boolean;
  
  validate(control: AbstractControl): ValidationErrors | null {
    if(this.toBeValidated) {
      return control.value >= 0 ? null : { positive: control.value };
    } else {
      return null;
    }
  }
}
