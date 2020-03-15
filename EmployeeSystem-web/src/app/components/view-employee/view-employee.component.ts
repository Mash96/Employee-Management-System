import { Component, OnInit } from '@angular/core';
import { ViewEmployeeService } from '../../services/view-employee.service';
import {Router} from '@angular/router';
import { EventEmitterService } from '../../services/event-emitter.service';
import { Employee } from '../../model/Employee';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee:any;
  search: String;
  public popoverTitle: String = 'Delete Confirmation';
  public popoverMessage: String = 'Are you Sure, you want to delete the record?';
  public cancelClicked:boolean=false;

  constructor(
    private viewEmployeeService: ViewEmployeeService, 
    private router: Router,
    private eventEmitter: EventEmitterService,
    private flashMessage: FlashMessagesService, ) { }

  ngOnInit() {
    this.viewEmployeeService.getEmployeeList().subscribe(
      data => {
        this.employee = data;
        //console.log(data);
      },
      error =>{
        console.log(error);
        return false;
      }
    );
    
  }

  viewEmployeeByName(){
    const name = this.search;
    this.router.navigate(['/viewEmpByName/'+name])
  }

  onUpdate(id){
    //this.viewEmployeeService.updateService(id);
    this.router.navigate(['/updateEmp/'+id])
  }

  onDelete(id){

    this.viewEmployeeService.deleteEmployee(id).subscribe(
      data => {
        if(data){
          this.flashMessage.show('Successfully deleted the Employee', {cssClass: 'alert-success', timeout: 3000});
          this.ngOnInit();
        }
      },
      error => {
        console.log(error);
        this.flashMessage.show('Unsuccessfull attempt', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }  
    );
  }

}
