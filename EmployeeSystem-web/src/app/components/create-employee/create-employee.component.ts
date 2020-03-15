import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CreateEmployeeService } from '../../services/create-employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  F_name: String;
  dateOfBirth: String;
  email: String;
  skills: any;
  skill_set = [];
  result = [];
  list_skill = [];
  msg: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService, 
    private createEmployeeService: CreateEmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.createEmployeeService.getSkills().subscribe(
      data=> {
        this.skills = data;
        //console.log(this.skills[0]);
        for (let item in this.skills) {
          //console.log(this.skills[item]);
          this.skill_set.push({
            id: this.skills[item].id,
            skill: this.skills[item].skill,
            selected: false
          });
        }
        //console.log(this.skill_set);
    
      },
      error=>{
        console.log(error);
        return false;
      }
    );
  
    
  }

  // checkbox function
  selected_value() {
    this.result = this.skill_set.filter((sk) => 
    { return sk.selected }).map((sk) => { return sk.id});

    //console.log(this.result);
  }

  EmployeeDetails(){
  
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
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      f_name: this.F_name,
      skills: this.list_skill
    };
    console.log(emp);

    // validate the form
    if(this.validateService.validateEmployee(emp)) {
      this.flashMessage.show("please fill the fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // validate email
    if(!this.validateService.validateEmail(emp.email)) {
      this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
     
    // creating Employee
    this.createEmployeeService.createEmployee(emp).subscribe(
      data => {
        if(data){
          this.flashMessage.show('Successfully created the Employee', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/home']);
        }
        else {
          this.flashMessage.show('Unsuccessfull attempt', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }

  });
}

}
