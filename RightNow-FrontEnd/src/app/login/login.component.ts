import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // loginForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   }
  // }


   loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.http
      .get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          alert('Login Successful');
        } else {
          alert('Invalid Email or Password');
        }
      });
  }
}
