import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../prototypes/patient.prototype';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  id: number;
  patient: Patient;

  constructor(private route: ActivatedRoute, private ps: PatientsService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    let patients: Array<Patient> = this.ps.getPatients();
    this.patient = patients[this.id];
  }
}
