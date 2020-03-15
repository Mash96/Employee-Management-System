import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { HomeComponent } from './components/home/home.component';
import { ViewEmployeeNameComponent } from './components/view-employee-name/view-employee-name.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';


import { ValidateService } from './services/validate.service';
import { CreateEmployeeService } from './services/create-employee.service';
import { ViewEmployeeService } from './services/view-employee.service';
import { EventEmitterService } from './services/event-emitter.service';

const AppRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addEmp', component: CreateEmployeeComponent},
  {path: 'viewEmp', component: ViewEmployeeComponent},
  {path: 'viewEmpByName/:name', component: ViewEmployeeNameComponent},
  {path: 'updateEmp/:id', component: UpdateEmployeeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ]
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    HomeComponent,
    ViewEmployeeNameComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    HttpModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [ValidateService, CreateEmployeeService, ViewEmployeeService, EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
