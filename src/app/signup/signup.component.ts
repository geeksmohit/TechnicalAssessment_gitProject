import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  confirmpassword: any;
  password: any;
  valid: Boolean;

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'cancleFee' : new FormControl('',Validators.compose([Validators.required, Validators.pattern('^([1-9][0-9]?|100)$')])),
      'firstname' : new FormControl('',Validators.compose([Validators.required, Validators.pattern('([A-Za-z ]+)')])),
      'lastname': new FormControl('',Validators.compose([Validators.required, Validators.pattern('([A-Za-z ]+)')])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      'phonenumber' : new FormControl('',Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)])),
      'mydate' : new FormControl('',Validators.compose([Validators.required])),
      'password' : new FormControl('',Validators.compose([Validators.required])),
      'confirmpassword' : new FormControl('',Validators.compose([Validators.required]))

  })
}


singup()
{
  if(!this.signupForm.valid){
    return;
  }

  if(this.signupForm.value.password !== this.signupForm.value.confirmpassword){
    alert("Password Mismatch?")
    this.router.navigate(['signup'])
    return;
  }
  var object ={
    'firstname' : this.signupForm.value.firstname,
    'lastname': this.signupForm.value.lastname,
    'email' : this.signupForm.value.email,
    'phonenumber' : this.signupForm.value.phonenumber,
    'mydate' : this.signupForm.value.mydate,
    'password' : this.signupForm.value.password,
    'confirmpassword' : this.signupForm.value.confirmpassword,
  }
   
  console.log('',object)
      localStorage.setItem('signupKey',JSON.stringify(this.signupForm.value))
      alert("Registration Successful");
}

// to run on press button 
preventSpace(event) {
  if(event.charCode == 32 && !event.target.value) {
    event.preventDefault()
  }
  else {
    // console.log(event)
  }
  // console.log('event', event.charCode)
  
}

}
