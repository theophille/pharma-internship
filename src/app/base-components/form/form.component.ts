import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CnpValidatorDirective } from 'src/app/directives/validators/cnp.directive';
import { PhoneValidatorDirective } from 'src/app/directives/validators/phone.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() data: Array<any>;
  @Input() isSubmitted: boolean;
  @Output('formData') getNgFormEvent = new EventEmitter<any>();
  
  getNgForm(form: NgForm) {
    this.getNgFormEvent.emit(form);
    console.log(form);
  }
}
