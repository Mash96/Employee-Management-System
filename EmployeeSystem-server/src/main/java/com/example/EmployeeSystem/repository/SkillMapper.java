package com.example.EmployeeSystem.repository;

import com.example.EmployeeSystem.model.Employee;
import com.example.EmployeeSystem.model.Skill;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface SkillMapper extends CrudRepository<Skill, Integer> {
    List<Skill> findAll();
}
