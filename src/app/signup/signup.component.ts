import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!:FormGroup
  title = 'formvalidation';
  submitted=false;
  
  

  constructor(private formBuilder:FormBuilder, private router: Router,private http:HttpClient){}
    ngOnInit() {
    // Update the form control names to be more descriptive
this.signupform = this.formBuilder.group({
  username: ['', [Validators.required, Validators.minLength(4)]],
  email: ['', [Validators.required, Validators.email]],
  
  password: [
    '',
    [
      Validators.required,
    
    ],
  ],
});

    } 

    public get formControls() {
      return this.signupform.controls;
    }
    


  
    getemailValidationMessage() {
      const emailControl = this.signupform.get('email');
      if (!emailControl) {
        return '';
      }
    
      if (emailControl.hasError('required')) {
        return 'email is required';
      }
    
      if (emailControl.hasError('email')) {
        return 'Invalid email format';
      }
    
      return '';
    }

    getpasswordValidationMessage() {
      const passwordControl = this.signupform.get('password');
      if (!passwordControl) {
        return '';
      }
  
      if (passwordControl.hasError('required')) {
        return 'password is required';
      }
  
  
      return '';
    }
    onSubmit() {
      this.submitted = true;         
      if (this.signupform.invalid) {
        return;
      }
      
      const bodyData={
        username : this.formControls['username'].value,
        email: this.formControls['email'].value,
    
        password:this.formControls['password'].value
      };

      this.http.post("http://localhost:8080/laptopstore/signup",bodyData,{responseType:'text'})
      .subscribe((resultData: any)=>{
        console.log(resultData);
        alert("User Registered Successfully");
      });



      this.router.navigate(['/login']);
    }

    
  }