package com.example.EmployeeSystem.model;


//import java.sql.Array;
//import java.lang.reflect.Array;
import org.hibernate.annotations.Type;

import java.util.Date;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.*;

@Entity
@Table(name = "EmployeeData")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "dateOfBirth", nullable = false)
    private String dateOfBirth;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "f_name", nullable = false)
    private String f_name;

    @ManyToMany
    private Set<Skill> skills;

    public Employee() {

    }

    public Employee( String dateOfBirth, String email, String f_name) {
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.f_name = f_name;
    }

    public Employee (String dateOfBirth, String email, String f_name, Set<Skill> skills) {
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.f_name = f_name;
        this.skills = skills;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String F_name) {
        this.f_name = F_name;
    }

    public Set<Skill> getSkills() {
        return skills;
    }

    public void setSkills(Set <Skill> skills) {
        this.skills = skills;
    }



}
