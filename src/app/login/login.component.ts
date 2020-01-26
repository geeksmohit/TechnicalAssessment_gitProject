import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  checkbox : Boolean;
  email: string;
  password: any;
  value: any;
  rememberMe: any;
  object1: any;
  constructor(private router: Router) { }

  ngOnInit() {

    this.login = new FormGroup({
      'email' : new FormControl('',Validators.compose([Validators.required])),
      'password' : new FormControl('',Validators.compose([Validators.required])),
      'checkbox' : new FormControl('',Validators.compose([Validators.required]))
  });
this.getRememberData();
}


loginform(){

  // console.log(this.login.value)
  var data=JSON.parse(localStorage.getItem('signupKey'));
  // console.log(data)
// this.login.value.checkbox
  if(data == null)
  {
    alert("enter email or password")
  }
  else{
      if((data.password==this.login.value.password) && (data.email==this.login.value.email))
      {
        if(this.login.value.checkbox){
          console.log(this.login.value.checkbox);
          //save login credentials
          localStorage.setItem('email',this.login.value.email)
          localStorage.setItem('password',this.login.value.password)
          localStorage.setItem('checkbox',this.login.value.checkbox)
         }
      this.router.navigate(['home']);
    }
    else {
      alert("please check your email or password")
    }
  }
}

getRememberData(){

  //get login credentials
  console.log("remember me data")

this.login.patchValue({
  "email": localStorage.getItem('email'),
  "password": localStorage.getItem('password'),
  "checkbox": localStorage.getItem('checkbox')
});

}
}