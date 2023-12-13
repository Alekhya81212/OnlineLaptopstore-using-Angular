package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Signup;
import com.example.demo.model.User;


public interface SignupRepository extends JpaRepository<Signup,Integer> {
Signup findByUsername(String username);
	
	boolean existsByUsername(String username);
	
	

}
