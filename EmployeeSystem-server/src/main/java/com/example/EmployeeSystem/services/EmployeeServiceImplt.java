package com.example.EmployeeSystem.services;

import java.util.List;
import java.util.Optional;

import com.example.EmployeeSystem.model.Skill;
import com.example.EmployeeSystem.repository.SkillMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.EmployeeSystem.model.Employee;
import com.example.EmployeeSystem.repository.EmployeeMapper;

@Service
public class EmployeeServiceImplt implements EmployeeService{
    @Autowired
    private EmployeeMapper employeeRepository;

    public List<Employee> getAllUsers() {
        return  employeeRepository.findAll();
    }

    public void insertEmployee(Employee employee) {
        Employee empNew = new Employee();
        empNew.setF_name(employee.getF_name());
        empNew.setDateOfBirth(employee.getDateOfBirth());
        empNew.setEmail(employee.getEmail());
        empNew.setSkills(employee.getSkills());
        employeeRepository.save(empNew);

    }

    public List<Employee> getEmployeeByName(String f_name) {
        Employee emp = new Employee();
        emp.setF_name(f_name);
        String name = emp.getF_name();
        return employeeRepository.find(name);
    }

    public Optional<Employee> getEmployeeById(int id) {
        return employeeRepository.findById(id);
    }

    public void updateEmployee(Employee employee, int id) {
        Optional<Employee> emp = employeeRepository.findById(id);
        Employee employee1 = emp.get();
        employee1.setF_name(employee.getF_name());
        employee1.setDateOfBirth(employee.getDateOfBirth());
        employee1.setEmail(employee.getEmail());
        employee1.setSkills(employee.getSkills());
        employeeRepository.save(employee1);
    }

    public void deleteEmployee(int id) {
        employeeRepository.Delete(id);
    }





}
