import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrepaidService } from '../prepaid.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent {

  mobile: string = '';

  constructor(
    private router: Router,
    private prepaidService: PrepaidService
  ) {}

  submitNumber() {
    if (this.mobile.length !== 10 || !/^\d{10}$/.test(this.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    this.prepaidService.saveMobile(this.mobile).subscribe(() => {
      this.router.navigate(['/recharge', this.mobile]);
    });
  }
}
