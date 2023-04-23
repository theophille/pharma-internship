import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Drug } from '../prototypes/drug.prototype';
import { Patient } from '../prototypes/patient.prototype';
import { DrugsService } from '../services/drugs.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  params: Params;
  id: number;
  formArray: any[];
  toBeAddedObject: Patient | Drug;
  submitPressed: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ps: PatientsService,
              private ds: DrugsService) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if(this.params.type == 'patient') {
      let patients: Array<Patient> = this.ps.getPatients();
      this.toBeAddedObject = patients[this.id];
      let patient: Patient = this.toBeAddedObject as Patient;

      this.formArray = [
        [
          { placeholder: 'First Name', name: 'firstName', type: 'text', mandatory: true, value: patient.firstName },
          { placeholder: 'Last Name', name: 'lastName', type: 'text', mandatory: true, value: patient.lastName }
        ],
        [
          { placeholder: 'Email', name: 'email', type: 'email', mandatory: true, value: patient.email }
        ],
        [
          { placeholder: 'Date of Birth', name: 'dateOfBirth', type: 'date', mandatory: true, value: patient.dateOfBirth },
          { placeholder: 'CNP', name: 'cnp', type: 'id', mandatory: true, value: patient.cnp }
        ],
        [
          { placeholder: 'Phone', name: 'phone', type: 'tel', mandatory: true, value: patient.phone }
        ],
        [
          { placeholder: 'Address 1', name: 'addressOne', type: 'text', mandatory: true, value: patient.addressOne },
          { placeholder: 'Address 2 (optional)', name: 'addressTwo', type: 'text', mandatory: false, value: patient.addressTwo }
        ]
      ]
    } else {
        let drugs: Array<Drug> = this.ds.getDrugs();
        this.toBeAddedObject = drugs[this.id];
        let drug: Drug = this.toBeAddedObject as Drug;

        this.formArray = [
        [
          { placeholder: 'Name', name: 'name', type: 'text', mandatory: true, value: drug.name }
        ],
        [
          { placeholder: 'Price', name: 'price', type: 'number', mandatory: true, value: drug.price },
          { placeholder: 'Stock', name: 'stock', type: 'number', mandatory: true, value: drug.stock }
        ],
        [
          { placeholder: 'Description', name: 'description', type: 'text', mandatory: true, value: drug.description }
        ]
      ]
    }
  }

  onSubmit(event: any) {
    if(event.valid) {
      for(const [key, value] of Object.entries(event.value)) {
        if(typeof this.toBeAddedObject[key] === 'number') {
          this.toBeAddedObject[key] = Number(value);
        } else {
          this.toBeAddedObject[key] = value;
        }
      }
      
      if(this.params.type === 'patient') {
        this.ps.modifyPatientData(this.id, this.toBeAddedObject as Patient);
        console.log(this.toBeAddedObject);
        
      } else {
        this.ds.modifyDrugData(this.id, this.toBeAddedObject as Drug);
      }

      this.router.navigate(['/']);
    }

    this.submitPressed = true;
  }
}
