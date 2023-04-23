import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() values: Array<string>;
  @Output('onValueChange') valueChangeEvent =  new EventEmitter<string>();

  onValueChange(event: any) {
    this.valueChangeEvent.emit(event.target.value);
  }
}
