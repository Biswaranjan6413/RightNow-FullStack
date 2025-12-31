import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent {

  mobile: string = '';

  constructor(private router: Router) {}

  submitNumber() {
    if (this.mobile.length !== 10 || !/^\d{10}$/.test(this.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    this.router.navigate(['/recharge', this.mobile]);
  }
}
