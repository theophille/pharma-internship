import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from '../prototypes/drug.prototype';
import { DrugsService } from '../services/drugs.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  id: number;
  drug: Drug;

  constructor(private route: ActivatedRoute, private ps: DrugsService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    let drugs: Array<Drug> = this.ps.getDrugs();
    this.drug = drugs[this.id];
  }
}
