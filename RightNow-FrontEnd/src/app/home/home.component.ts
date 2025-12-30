import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
currentIndex = 0;

  slides = [
    {
      title: 'Unlimited Calls & 5G Data',
      desc: 'Enjoy seamless connectivity',
      image: '/assets/wifi-img.png'
    },
    {
      title: 'Unlimited Calls & 5G Data',
      desc: 'Enjoy seamless connectivity',
      image: '/assets/wifiimg4.jpeg'
    },
     {
      title: 'Unlimited Calls & 5G Data',
      desc: 'Enjoy seamless connectivity',
      image: '/assets/wifi-img2.png'
    },
    // {
    //   title: 'Unlimited Calls & 5G Data',
    //   desc: 'Enjoy seamless connectivity',
    //   image: '/assets/wifiimg6.jpeg'
    // },
    {
      title: 'Ministry of Home Affairs I4C data shows',
      desc: '68.7% drop in fraud losses for Airtel users',
      image: '/assets/wifiimg1.cms'
    },
    {
      title: 'Airtel Festive Offer',
      desc: 'Free benefits added',
      image: '/assets/wifiimg2.jpeg'
    },
    {
      title: 'Unlimited Calls & 5G Data',
      desc: 'Enjoy seamless connectivity',
      image: '/assets/wifiimg3.jpeg'
    },
     
    {
      title: 'Unlimited Calls & 5G Data',
      desc: 'Enjoy seamless connectivity',
      image: '/assets/wifiimg5.jpeg'
    }
  ];

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }
}
