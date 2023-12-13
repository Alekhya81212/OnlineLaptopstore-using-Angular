package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Signup;
import com.example.demo.repo.SignupRepository;

@Service
public class UserService {
	@Autowired
	private SignupRepository signupRepo;
	
public String loginUser(String username, String password) {
		
		Signup signup = signupRepo.findByUsername(username);
		if(signup != null && signup.getPassword().equals(password)) {
			return "Welcome "+username;
		}else {
			return "Invalid username or password";
		}
	}

}
