package com.example.EmployeeSystem.repository;

import com.example.EmployeeSystem.model.Employee;
import com.example.EmployeeSystem.model.Skill;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Repository
public interface EmployeeMapper extends CrudRepository<Employee, Integer> {
    List<Employee> findAll();

    @Query("select p from Employee p where p.f_name like %:f_name%")
    List<Employee> find(String f_name);

    @Query("delete from Employee p where p.id = :id")
    @Modifying
    @Transactional
    void Delete(int id);


}
