package com.example.EmployeeSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication(scanBasePackages="com.example.EmployeeSystem")
//@RestController
@EnableAutoConfiguration
public class EmployeeSystemApplication {

	public static void main(String[] args) {

		SpringApplication.run(EmployeeSystemApplication.class, args);
	}

}
