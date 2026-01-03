import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 regForm: FormGroup;
  showAddress = false;
  showFileUpload = false;
  

  constructor(private fb: FormBuilder,
    private regService: RegistrationService
  ) {
    this.regForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      idProofType: ['', Validators.required],
      idProofNumber: ['', Validators.required],
      idProofFile: ['', Validators.required],  
      alternatePhone: [''],

      address: this.fb.group({
        current: this.fb.group({
          house: ['', Validators.required],
          street: ['', Validators.required],
          city: ['', Validators.required],
          pincode: ['', Validators.required]
        }),
        permanent: this.fb.group({
          house: ['', Validators.required],
          street: ['', Validators.required],
          city: ['', Validators.required],
          pincode: ['', Validators.required]
        }),
        sameAsCurrent: [false]
      })
    });
  }

  toggleAddress() {
    this.showAddress = !this.showAddress;
  }

  copyAddress(event: any) {
    if (event.target.checked) {
      const current = this.regForm.get('address.current')?.value;
      this.regForm.get('address.permanent')?.patchValue(current);
    }
  }

  onIdProofChange() {
    const type = this.regForm.get('idProofType')?.value;
    this.showFileUpload = !!type; 
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.regForm.patchValue({
        idProofFile: file.name
      });
    }
  }

  register() {
 this.regService.saveRegistration(this.regForm.value)
      .subscribe(() => {
        alert('Registration Saved Successfully!');
        this.regForm.reset();
      });  }
}
