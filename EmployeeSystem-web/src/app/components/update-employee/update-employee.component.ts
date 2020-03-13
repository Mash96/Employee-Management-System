import { Component, OnInit } from '@angular/core';
import { ViewEmployeeService } from '../../services/view-employee.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { CreateEmployeeService } from '../../services/create-employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:any;
  id:number;
  F_name: String;
  dateOfBirth: String;
  email: String;
  skills: any;
  name: String;
  skill_set = [];
  result = [];
  list_skill = [];
  item:any;

  usersg_checked:any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewEmployeeService: ViewEmployeeService,
    private flashMessage: FlashMessagesService,
    private createEmpService: CreateEmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.createEmpService.getSkills().subscribe(
      data => {
        this.skills = data
        for (let item in this.skills) {
          //console.log(this.skills[item]);
          this.skill_set.push({
            id: this.skills[item].id,
            skill: this.skills[item].skill,
            selected: false
          });
        }
      },
      error =>{
        console.log(error);
        return false;
      }
    )

    this.viewEmployeeService.updateService(this.id).subscribe(
      data => {
        this.employee = data;
        this.F_name = this.employee.f_name;
        this.dateOfBirth = this.employee.dateOfBirth;
        this.email = this.employee.email;
        this.item = this.employee.skills

        // for(let item of this.employee.skills){
        //   for(let sk in this.setSkills){
        //     //console.log(this.setSkills[0].value);
        //     if (item.skill == this.setSkills[sk].value){
        //       console.log(this.setSkills[sk].value);
        //       this.setSkills[sk].selected = true;
        //       break;
        //     }
        //     else {
        //       this.setSkills[sk].selected = false;
        //     }
            
        //   }
          
        // }
        //console.log(this.dateOfBirth);

      },
      error =>{
        console.log(error);
        return false;
      }
    );
    

  }

  selected_value() {
    this.result = this.skill_set.filter((ch) => 
    { return ch.selected }).map((ch) => { return ch.id});

    console.log(this.result);
  }

  UpdateEmployee(){
    for (let item of this.result) {
      for (let skill in this.skill_set) {
        if (item == this.skill_set[skill].id) {
          this.list_skill.push({
            "id":this.skill_set[skill].id,
            "skill_name":this.skill_set[skill].value
          });
          break;
        }
      }
    }
    console.log(this.list_skill);
    
    const emp = {
      f_name: this.F_name,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      skills: this.list_skill
    };

    this.viewEmployeeService.updateEmployee(this.id, emp).subscribe(
      data => {
        if(data){
          this.flashMessage.show('Successfully updated the Employee', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/viewEmp']);
        }
        else {
          this.flashMessage.show('Unsuccessfull attempt', {cssClass: 'alert-danger', timeout: 3000});
        }
      }
    )
  }

}
