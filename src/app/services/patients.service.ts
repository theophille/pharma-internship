import { Injectable } from '@angular/core';
import { Patient } from '../prototypes/patient.prototype';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Array<Patient> = [
    new Patient("6435545454654", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '2002-04-12'),
    new Patient("6435545454655", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '2002-04-13'),
    new Patient("6435545454656", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '2002-04-14'),
    new Patient("6435545454657", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '2002-04-15'),
    new Patient("6435545454658", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '2002-04-16'),
    new Patient("6435545454659", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false,  '2002-04-17')
  ];

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getPatients(): Array<Patient> {
    return this.patients;
  }

  modifyPatientData(id: number, newData: Patient) {
    this.patients[id] = newData;
  }

  setPatients(patients: Array<Patient>): void {
    this.patients = patients;
  }
}
