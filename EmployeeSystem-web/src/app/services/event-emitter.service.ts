import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';
import { ViewEmployeeService } from '../services/view-employee.service';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription; 

  constructor(private viewEmployee: ViewEmployeeService) { }
  onFirstComponentButtonClick(employee:any) {    
    this.invokeFirstComponentFunction.emit(employee);    
  }

  
}
 