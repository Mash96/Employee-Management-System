package com.example.EmployeeSystem.services;

import com.example.EmployeeSystem.model.Skill;
import com.example.EmployeeSystem.repository.SkillMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class SkillService {
    @Autowired
    private SkillMapper skillMapper;

    public List<Skill> getAllSkills() {
        return skillMapper.findAll();
    }
}
