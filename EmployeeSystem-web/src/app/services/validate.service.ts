import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateEmployee(emp) {
    if (emp.f_name && emp.email && emp.dateOfBirth) {
     return false;
    }
    else {
    return true;
    }
   }

   validateEmail(email) {
     var re = /\S+@\S+\.\S+/;
     return re.test(email);
   }
}
