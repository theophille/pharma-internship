import { Injectable } from '@angular/core';
import { Drug } from '../prototypes/drug.prototype';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  private drugs: Array<Drug> = [
    new Drug("73421", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73422", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73423", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73424", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73425", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73426", "Kanamicin", 34, "For your eyes", 100, false),
    new Drug("73427", "Kanamicin", 34, "For your eyes", 100, false)
  ];

  addDrug(drug: Drug) {
    this.drugs.push(drug);
  }

  getDrugs() {
    return this.drugs;
  }
}
