import { Component, OnInit } from '@angular/core';
import { Patient } from '../prototypes/patient.prototype';
import { Drug } from '../prototypes/drug.prototype';
import { PatientsService } from '../services/patients.service';
import { DrugsService } from '../services/drugs.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dropdownValues: Array<string> = ['all', 'patients', 'drugs'];
  selectedDDOption: string = this.dropdownValues[0];
  time: string;
  checkedCheckboxes:number = 0;

  constructor(private ps: PatientsService, private ds: DrugsService) {}

  smallPatientsTableTitles: Array<string> = ['Check', 'CNP', 'First Name', 'Last Name', 'Modify'];
  smallDrugsTableTitles: Array<string> = ['Check', 'ID', 'Name', 'Price', 'Modify'];
  detailedPatientsTableTitles: Array<string> = ['Check', 'CNP', 'First Name', 'Last Name', 'Phone', 'Address', 'Modify'];
  detailedDrugsTableTitles: Array<string> = ['Check', 'ID', 'Name', 'Price', 'Description', 'Stock', 'Modify'];

  patients: Array<Patient> = this.ps.getPatients();

  drugs: Array<Drug> = this.ds.getDrugs();

  onCheckboxChange(event: any, i: number, type: string) {
    if(type === 'patient') {
      this.patients[i].markedForDeletion = event.target.checked;
    } else {
      this.drugs[i].markedForDeletion = event.target.checked;
    }

    event.target.checked ? this.checkedCheckboxes++ : this.checkedCheckboxes--;
  }

  deleteItems() {
    this.patients = this.patients.filter(patient => patient.markedForDeletion != true);
    this.drugs = this.drugs.filter(drug => drug.markedForDeletion != true);
    this.checkedCheckboxes = 0;
  }

  ngOnInit(): void {
    let today: Date = new Date();
    const monthNames: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    this.time = today.toLocaleDateString("en-US", {weekday: 'long'}) + ", " + 
                today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();
  }

  setDDOption(event: any): void {
    this.selectedDDOption = event;
  }
}
