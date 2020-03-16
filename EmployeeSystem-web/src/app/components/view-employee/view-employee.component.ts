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
  names_list = [];
  suggestions: string[] = [];

  constructor(
    private viewEmployeeService: ViewEmployeeService, 
    private router: Router,
    private eventEmitter: EventEmitterService,
    private flashMessage: FlashMessagesService, ) { }

  ngOnInit() {
    this.viewEmployeeService.getEmployeeList().subscribe(
      data => {
        this.employee = data;
        for(let emp of this.employee) {
          this.names_list.push(emp.f_name);
          
        }
        //console.log(this.names_list);
        //console.log(data);
      },
      error =>{
        console.log(error);
        return false;
      }
    );

    //console.log(this.names_list);
    
  }

  viewEmployeeByName(){
    const name = this.search;
    this.viewEmployeeService.getEmployeeByName(name).subscribe(
      data=>{
        if(data.length != 0){
          console.log(data);
          this.router.navigate(['/viewEmpByName/'+name])
        }
        else if(data.length == 0) {
          this.flashMessage.show('User not found', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      },
      error=>{
        console.log(error);
        return false;
      }
    )
    
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

  // suggest(){
  //   //console.log(this.names_list);
  //   this.suggestions = this.names_list.filter((s) => {
  //     return s.startsWith(this.search);
  //   })
  //   .slice(0, 5);
  // }

}
