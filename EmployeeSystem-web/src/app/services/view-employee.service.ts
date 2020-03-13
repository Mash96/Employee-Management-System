import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeService {
  empData = {
    f_name: String,
    date_of_birth: String,
    email: String,
    skills: String
  };
  constructor(private http: Http) { }

  getEmployeeList(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/viewEmp',{headers: headers}).
    pipe(map(res => res.json()));
  }

  getEmployeeByName(f_name){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/getEmpbyName/'+f_name, {headers: headers}).
    pipe(map(res => res.json()));
  }

  updateEmployee(id, employee: object): Observable <object>{
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:8080/updateEmpId/'+id, employee, {headers: headers});
  }

  deleteEmployee(id): Observable <object>{
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:8080/deleteEmp/'+id, {headers: headers});
  }

  updateService(id) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/getAll/'+id, {headers: headers}).
    pipe(map(res => res.json()));

    
  }


}
