package com.example.EmployeeSystem.controllers;

import com.example.EmployeeSystem.services.EmployeeService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.EmployeeSystem.model.Employee;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/") // url starts with / this
public class EmployeeController {

    @Autowired // this gets the beans called employeeRepository
    EmployeeService employeeService;

    @PostMapping("/insertEmp")
    public void EmployeeInsert(@RequestBody Employee employee){
        employeeService.insertEmployee(employee);
    }

    @GetMapping("/viewEmp")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllUsers();
    }

    @GetMapping("/getEmpbyName/{f_name}")
    public List<Employee> getEmpByName(@PathVariable("f_name") String f_name){
        return employeeService.getEmployeeByName(f_name);
    }

    @GetMapping("/getAll/{id}")
    public Optional<Employee> getEmpById(@PathVariable("id") int id) {
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/updateEmpId/{id}")
    public void EmployeeUpdateById(@RequestBody Employee newEmployee, @PathVariable("id") int id) {
        employeeService.updateEmployee(newEmployee, id);
    }

    @DeleteMapping("/deleteEmp/{id}")
    public void EmployeeDelete(@PathVariable("id") int id){
        employeeService.deleteEmployee(id);
    }



}
