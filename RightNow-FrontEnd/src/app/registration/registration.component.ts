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
  formSubmitted = false;
  

  constructor(private fb: FormBuilder,
    private regService: RegistrationService
  ) {
    this.regForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
  const permanentGroup = this.regForm.get('address.permanent');

  if (event.target.checked) {
    const current = this.regForm.get('address.current')?.value;
    permanentGroup?.patchValue(current);
    permanentGroup?.disable();
  } else {
    permanentGroup?.reset();
    permanentGroup?.enable();
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

// register() {
//   this.formSubmitted = true;

//   if (this.regForm.invalid) {
//     this.regForm.markAllAsTouched();
//     return;
//   }

//   this.regService.saveRegistration(this.regForm.value)
//     .subscribe(() => {
//       alert('Registration Saved Successfully!');
//       this.regForm.reset();
//       this.formSubmitted = false;
//     });
// } 

register() {
  this.formSubmitted = true;

  // 1️⃣ Stop if form is invalid
  if (this.regForm.invalid) {
    this.regForm.markAllAsTouched();
    return;
  }

  // 2️⃣ Get clean form data
  const formData = this.regForm.getRawValue(); // IMPORTANT

  // 3️⃣ Debug: check what is being sent
  console.log('Registration Data:', formData);

  // 4️⃣ Send data to backend
  this.regService.saveRegistration(formData).subscribe({
    next: () => {
      alert('Registration Saved Successfully!');
      this.regForm.reset();
      this.formSubmitted = false;
    },
    error: (err) => {
      console.error('Registration Failed', err);
      alert('Something went wrong!');
    }
  });
}


}
