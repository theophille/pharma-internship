import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../prototypes/patient.prototype';
import { Drug } from '../prototypes/drug.prototype';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;

    if(this.params.type == 'patient') {
      this.formArray = [
        [
          { placeholder: 'First Name', name: 'firstName', type: 'text', mandatory: true },
          { placeholder: 'Last Name', name: 'lastName', type: 'text', mandatory: true }
        ],
        [
          { placeholder: 'Email', name: 'email', type: 'email', mandatory: true }
        ],
        [
          { placeholder: 'Date of Birth', name: 'dateOfBirth', type: 'date', mandatory: true },
          { placeholder: 'CNP', name: 'cnp', type: 'id', mandatory: true }
        ],
        [
          { placeholder: 'Phone', name: 'phone', type: 'tel', mandatory: true }
        ],
        [
          { placeholder: 'Address 1', name: 'addressOne', type: 'text', mandatory: true },
          { placeholder: 'Address 2 (optional)', name: 'addressTwo', type: 'text', mandatory: false }
        ]
      ]

      this.toBeAddedObject = new Patient();
    } else {
        this.formArray = [
        [
          { placeholder: 'Name', name: 'name', type: 'text', mandatory: true }
        ],
        [
          { placeholder: 'Price', name: 'price', type: 'number', mandatory: true },
          { placeholder: 'Stock', name: 'stock', type: 'number', mandatory: true }
        ],
        [
          { placeholder: 'Description', name: 'description', type: 'text', mandatory: true }
        ]
      ]

      this.toBeAddedObject = new Drug();
    }
  }

  onSubmit(event: any) {
    for(const [key, value] of Object.entries(event.value)) {
      if(typeof this.toBeAddedObject[key] === 'number') {
        this.toBeAddedObject[key] = Number(value);
      } else {
        this.toBeAddedObject[key] = value;
      }
    }

    this.submitPressed = true;
  }
}
