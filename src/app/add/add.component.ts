import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../prototypes/patient.prototype';
import { Drug } from '../prototypes/drug.prototype';
import { PatientsService } from '../services/patients.service';
import { DrugsService } from '../services/drugs.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  params: Params;
  formArray: any[];
  toBeAddedObject: Patient | Drug;
  submitPressed: boolean = false;

  constructor(private route: ActivatedRoute,
              private ps: PatientsService,
              private ds: DrugsService) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;

    if(this.params.type == 'patient') {
      this.formArray = [
        [
          { placeholder: 'First Name', name: 'firstName', type: 'text', mandatory: true, value: '' },
          { placeholder: 'Last Name', name: 'lastName', type: 'text', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Email', name: 'email', type: 'email', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Date of Birth', name: 'dateOfBirth', type: 'date', mandatory: true, value: '' },
          { placeholder: 'CNP', name: 'cnp', type: 'id', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Phone', name: 'phone', type: 'tel', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Address 1', name: 'addressOne', type: 'text', mandatory: true, value: '' },
          { placeholder: 'Address 2 (optional)', name: 'addressTwo', type: 'text', mandatory: false, value: '' }
        ]
      ]

      this.toBeAddedObject = new Patient();
    } else {
        this.formArray = [
        [
          { placeholder: 'Name', name: 'name', type: 'text', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Price', name: 'price', type: 'number', mandatory: true, value: '' },
          { placeholder: 'Stock', name: 'stock', type: 'number', mandatory: true, value: '' }
        ],
        [
          { placeholder: 'Description', name: 'description', type: 'text', mandatory: true, value: '' }
        ]
      ]

      this.toBeAddedObject = new Drug();
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
        this.ps.addPatient(this.toBeAddedObject as Patient);
      } else {
        this.ds.addDrug(this.toBeAddedObject as Drug);
      }
    }

    this.submitPressed = true;
  }
}
