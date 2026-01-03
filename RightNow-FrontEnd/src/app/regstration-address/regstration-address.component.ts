import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regstration-address',
  templateUrl: './regstration-address.component.html',
  styleUrls: ['./regstration-address.component.css']
})
export class RegstrationAddressComponent {

   regForm: FormGroup;
    showAddress = false;

  toggleAddress() {
    this.showAddress = !this.showAddress;
  }

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      currentAddress: [''],
      permanentAddress: [''],
      sameAddress: [false]
    });
  }

  onSameAddressChange(event: any) {
    if (event.target.checked) {
      this.regForm.patchValue({
        permanentAddress: this.regForm.get('currentAddress')?.value
      });
    } else {
      this.regForm.patchValue({
        permanentAddress: ''
      });
    }

  }
}