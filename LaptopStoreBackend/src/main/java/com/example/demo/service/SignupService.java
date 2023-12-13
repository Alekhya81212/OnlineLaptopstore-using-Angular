package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Signup;
import com.example.demo.model.User;
import com.example.demo.repo.SignupRepository;

@Service
public class SignupService {
	@Autowired
	private SignupRepository signuprepo;
	
public String createNewuser(Signup signup) {
		
		if(signuprepo.existsByUsername(signup.getUsername())) {
			return "Username already taken";
		}else {
		signuprepo.save(signup);
		
		return "User signup successfully";
		}
		
	}
public String loginUser(Signup user) {
	
	Signup signup = signuprepo.findByUsername(user.getUsername());
	if(signup != null && signup.getPassword().equals(user.getPassword())) {
		return "Welcome "+user.getUsername();
	}else {
		return "Invalid username or password";
	}	
	
}




}
