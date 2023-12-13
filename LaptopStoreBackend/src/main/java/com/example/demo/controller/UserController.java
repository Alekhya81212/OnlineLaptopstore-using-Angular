package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Signup;
import com.example.demo.model.User;
import com.example.demo.service.SignupService;

@RestController
@RequestMapping("/laptopstore")
@CrossOrigin("*")//origins="*"
public class UserController {

	@Autowired
private SignupService signupService;
    
	@PostMapping("/signup")
	public String signup(@RequestBody Signup signup) {
		
		return signupService.createNewuser(signup);
		
	}
	@PostMapping("/login")
	public String loginUser(@RequestBody Signup signup) {
		
		return signupService.loginUser(signup);
		
	}
	
	
	
}
