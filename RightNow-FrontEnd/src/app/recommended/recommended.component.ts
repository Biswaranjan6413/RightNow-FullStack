// import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { Plan } from '../models/plan';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
// export class RecommendedComponent implements AfterViewInit{
export class RecommendedComponent {

  // @ViewChild('slider', { static: false }) slider!: ElementRef;

  // cards = [
  //   {
  //     type: 'FIBER',
  //     title: 'Enjoy unlimited wi-fi at ₹999',
  //     desc: 'Up to 100 Mbps speed, unlimited calls & OTT apps',
  //     img: 'assets/recImg1.avif'
  //   },
  //   {
  //     type: 'POSTPAID',
  //     title: 'Get a superior network at just ₹549',
  //     desc: '75 GB data with no daily limit & top OTT apps',
  //     img: 'assets/recImg2.webp'
  //   },
  //   {
  //     type: 'PREPAID',
  //     title: 'Enjoy high-speed, seamless network',
  //     desc: 'Home delivery of SIM & Quick activation',
  //     img: 'assets/recImg3.webp'
  //   }
  // ];

  // ngAfterViewInit() {
  //   setInterval(() => {
  //     this.slider.nativeElement.scrollBy({
  //       left: 320,
  //       behavior: 'smooth'
  //     });

      
  //     if (
  //       this.slider.nativeElement.scrollLeft +
  //       this.slider.nativeElement.clientWidth >=
  //       this.slider.nativeElement.scrollWidth
  //     ) {
  //       this.slider.nativeElement.scrollTo({ left: 0 });
  //     }
  //   }, 2000);
  // }

  speeds = ['40 Mbps', '100 Mbps', '200 Mbps', '300 Mbps'];

  plans: Plan[] = [
    {
      name: 'Wifi Only Plan',
      ott: 'N/A',
      liveTv: 'N/A',
      prices: [
        { speed: '40 Mbps', amount: 499 },
        { speed: '100 Mbps', amount: 599 },
        { speed: '200 Mbps', amount: 749 },
        { speed: '300 Mbps', amount: 850 }
      ]
    },
    {
      name: 'Wifi + OTT + Live TV - Basic South Pack',
      ott: 'Sony Liv, Z5, Sun NXT, Aha (Telugu/Tamil) + 20 OTT',
      liveTv: '400 Live TV Channels',
      prices: [
        { speed: '40 Mbps', amount: 619 },
        { speed: '100 Mbps', amount: 719 },
        { speed: '200 Mbps', amount: 869 },
        { speed: '300 Mbps', amount: 970 }
      ]
    },
    {
      name: 'Wifi + OTT + Live TV - Basic South Pack + Hotstar',
      ott: 'Hotstar Super + 20 OTT',
      liveTv: '400 Live TV Channels',
      prices: [
        { speed: '40 Mbps', amount: 679 },
        { speed: '100 Mbps', amount: 779 },
        { speed: '200 Mbps', amount: 929 },
        { speed: '300 Mbps', amount: 1030 }
      ]
    },
    {
      name: 'Wifi + OTT + Live TV - Mega South Pack',
      ott: 'Amazon Prime Lite + 20 OTT',
      liveTv: '400 Live TV Channels',
      prices: [
        { speed: '40 Mbps', amount: 719 },
        { speed: '100 Mbps', amount: 819 },
        { speed: '200 Mbps', amount: 969 },
        { speed: '300 Mbps', amount: 1070 }
      ]
    }
  ];
}
