import { Component, OnInit } from '@angular/core';
import { Patient } from '../prototypes/patient.prototype';
import { Drug } from '../prototypes/drug.prototype';

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

  smallPatientsTableTitles: Array<string> = ['Check', 'CNP', 'First Name', 'Last Name', 'Modify'];
  smallDrugsTableTitles: Array<string> = ['Check', 'ID', 'Name', 'Price', 'Modify'];
  detailedPatientsTableTitles: Array<string> = ['Check', 'CNP', 'First Name', 'Last Name', 'Phone', 'Address', 'Modify'];
  detailedDrugsTableTitles: Array<string> = ['Check', 'ID', 'Name', 'Price', 'Description', 'Stock', 'Modify'];

  patients: Array<Patient> = [
    new Patient("64355", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64356", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64357", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64358", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64359", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64360", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false)
  ];

  drugs: Array<Drug> = [
    new Drug("73421", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73422", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73423", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73424", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73425", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73426", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73427", "Kanamicin", 34, "For your eyes", 100, false)
  ];

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
