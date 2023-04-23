import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/prototypes/patient.prototype';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent {
  @Input() headerTitle: string;
  @Input() tableContent: string;
  @Input('titles') tableHeaderNames: Array<string>;
  @Input('data') tableData: Array<Patient>;
  
  dropdownValue: string = 'all';
}
