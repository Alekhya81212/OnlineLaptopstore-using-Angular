package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="SignupRegistration")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Signup {
	
	@Id
	@GeneratedValue
	private int srno;
	private String username;
	private String email;
	private String password;
	public int getSrno() {
		return srno;
	}
	public void setSrno(int srno) {
		this.srno = srno;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Signup [srno=" + srno + ", username=" + username + ", email=" + email + ", password=" + password + "]";
	}
	public Signup(int srno, String username, String email, String password) {
		super();
		this.srno = srno;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public Signup() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}
