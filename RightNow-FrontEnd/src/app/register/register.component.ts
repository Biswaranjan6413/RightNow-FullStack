import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';

  register() {

    if (this.firstname.length < 3) {
      alert("Firstname must be at least 3 letters");
      return;
    }

    if (this.lastname.length < 3) {
      alert("Lastname must be at least 3 letters");
      return;
    }

    if (!this.email.endsWith(".com")) {
      alert("Email must end with .com");
      return;
    }

    if (this.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }
    alert("Registration Successful!");
  }
}
