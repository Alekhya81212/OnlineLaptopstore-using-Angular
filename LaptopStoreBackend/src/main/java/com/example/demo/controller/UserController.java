package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:63115")//origins="*"
public class UserController {

	@Autowired
	private UserRepository repo;
	
	@PostMapping("/user")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		
		System.out.println("data is stored in database");
		return ResponseEntity.ok(repo.save(user));
	}
	
	
}
