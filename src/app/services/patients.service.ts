import { Injectable } from '@angular/core';
import { Patient } from '../prototypes/patient.prototype';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Array<Patient> = [
    new Patient("64355", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64356", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64357", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64358", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64359", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false),
    new Patient("64360", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false)
  ];

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getPatients() {
    return this.patients;
  }
}
