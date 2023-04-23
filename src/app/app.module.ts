import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownComponent } from './base-components/dropdown/dropdown.component';
import { TableListComponent } from './base-components/table-list/table-list.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './base-components/form/form.component';
import { ModifyComponent } from './modify/modify.component';

import { PhoneValidatorDirective } from './directives/validators/phone.directive';
import { CnpValidatorDirective } from './directives/validators/cnp.directive';

import { PatientsService } from './services/patients.service';
import { DrugsService } from './services/drugs.service';
import { PatientComponent } from './patient/patient.component';
import { DrugComponent } from './drug/drug.component';
import { PositiveNumberValidatorDirective } from './directives/validators/positive-number.directive';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'orders-history', component: AddComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'patient/:id', component: PatientComponent },
  { path: 'drug/:id', component: DrugComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    DropdownComponent,
    TableListComponent,
    AddComponent,
    FormComponent,
    PhoneValidatorDirective,
    CnpValidatorDirective,
    ModifyComponent,
    PatientComponent,
    DrugComponent,
    PositiveNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PatientsService, DrugsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
