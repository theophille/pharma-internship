import { Injectable } from '@angular/core';
import { Patient } from '../prototypes/patient.prototype';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Array<Patient> = [
    new Patient("64355", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '04/12/2002'),
    new Patient("64356", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '03/12/2002'),
    new Patient("64357", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '02/12/2002'),
    new Patient("64358", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '01/12/2002'),
    new Patient("64359", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false, '03/15/2002'),
    new Patient("64360", "John", "Doe", "g@g.com", "0733784830", "Bucharest", '', false,  '03/15/2002')
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
}
