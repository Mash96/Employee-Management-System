import { Component, OnInit, Input } from '@angular/core';
import { ViewEmployeeService } from '../../services/view-employee.service';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-view-employee-name',
  templateUrl: './view-employee-name.component.html',
  styleUrls: ['./view-employee-name.component.css']
})
export class ViewEmployeeNameComponent implements OnInit {
  name: String;
  employeeName = []

  constructor(
    private viewEmployeeService: ViewEmployeeService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.name = params['name'];
      console.log(this.name);
    });

    this.viewEmployeeService.getEmployeeByName(this.name).subscribe(
      data =>{
        this.employeeName = data;
      },
      error => {
            console.log(error);
            return false;
          }  
    );
  }


  onUpdateViewName(id){
    this.router.navigate(['/updateEmp/'+id])
  }

  onDelete(id){
    this.viewEmployeeService.deleteEmployee(id).subscribe(
      data => {
        if(data){
          this.ngOnInit();
        }
      },
      error => {
        console.log(error);
        return false;
      }  
    );
  }



}
