package com.example.EmployeeSystem.controllers;
import com.example.EmployeeSystem.model.Skill;
import com.example.EmployeeSystem.services.EmployeeService;
import com.example.EmployeeSystem.services.SkillService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.EmployeeSystem.model.Employee;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/skill/") // url starts with / this
public class SkillControler {

    @Autowired // this gets the beans called employeeRepository
    SkillService skillService;

    @GetMapping("getSkill")
    public List<Skill> getALL() {
        return skillService.getAllSkills();
    }
}
