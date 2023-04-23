import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownComponent } from './base-components/dropdown/dropdown.component';
import { TableListComponent } from './base-components/table-list/table-list.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './base-components/form/form.component';
import { FormsModule } from '@angular/forms';
import { PhoneValidatorDirective } from './directives/validators/phone.directive';
import { CnpValidatorDirective } from './directives/validators/cnp.directive';
import { PatientsService } from './services/patients.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'orders-history', component: AddComponent }
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
    CnpValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
