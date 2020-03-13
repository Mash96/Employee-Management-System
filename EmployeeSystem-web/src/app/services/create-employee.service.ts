import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeService {
  employee: any;
  success: boolean;
  skill:any;
  constructor(private http:Http) { }

  createEmployee(employee: object): Observable <object> {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/insertEmp', employee, { headers: headers });
  }

  getSkills(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/skill/getSkill', {headers: headers}).
    pipe(map(res => res.json()));
  }
}
