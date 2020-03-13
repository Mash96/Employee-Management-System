package com.example.EmployeeSystem.services;

import com.example.EmployeeSystem.model.Employee;
import com.example.EmployeeSystem.model.Skill;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EmployeeService {
    public List<Employee> getAllUsers();

    public void insertEmployee(Employee employee);

    public List<Employee> getEmployeeByName(String f_name);

    public void updateEmployee(Employee employee, int id);

    public void deleteEmployee(int id);

    public Optional<Employee> getEmployeeById(int id);


}
