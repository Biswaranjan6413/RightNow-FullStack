import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostPaidComponent {

  step1Open = false;

  connection = "";
  mobile = "";
  name = "";
  city = "";
  area = "";
  pincode = "";

  constructor(private router: Router, private postService: PostService) {}

  toggleStep1() {
    this.step1Open = !this.step1Open;
  }

  selectConnection(type: string) {
    this.connection = type;
    this.step1Open = false;
  }

  submitForm() {

    if (!this.connection || !this.mobile || !this.name || !this.city || !this.area || !this.pincode) {
      alert("Please fill all details");
      return;
    }

    const postData = {
      connection: this.connection,
      mobile: this.mobile,
      name: this.name,
      city: this.city,
      area: this.area,
      pincode: this.pincode
    };

    this.postService.savePostData(postData).subscribe(() => {

      alert("Postpaid Request Saved Successfully!");

      this.router.navigate(['/viewplan'], {
        queryParams: { connection: this.connection }
      });

    }, error => {
      alert("Error while saving data!");
      console.error(error);
    });
  }
}
