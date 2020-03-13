package com.example.EmployeeSystem.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Skills")
public class Skill {

    @Id
    private int id;

    @Column(name = "skill_name", nullable = false)
    private String skill;

    @ManyToMany
    private Set<Employee> employees;

    public Skill(){}

    public Skill(int id,String skill){
        this.id = id;
        this.skill = skill;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }


}
