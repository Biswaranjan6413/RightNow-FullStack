import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements AfterViewInit{

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  cards = [
    {
      type: 'FIBER',
      title: 'Enjoy unlimited wi-fi at ₹999',
      desc: 'Up to 100 Mbps speed, unlimited calls & OTT apps',
      img: 'assets/recImg1.avif'
    },
    {
      type: 'POSTPAID',
      title: 'Get a superior network at just ₹549',
      desc: '75 GB data with no daily limit & top OTT apps',
      img: 'assets/recImg2.webp'
    },
    {
      type: 'PREPAID',
      title: 'Enjoy high-speed, seamless network',
      desc: 'Home delivery of SIM & Quick activation',
      img: 'assets/recImg3.webp'
    }
  ];

  ngAfterViewInit() {
    setInterval(() => {
      this.slider.nativeElement.scrollBy({
        left: 320,
        behavior: 'smooth'
      });

      
      if (
        this.slider.nativeElement.scrollLeft +
        this.slider.nativeElement.clientWidth >=
        this.slider.nativeElement.scrollWidth
      ) {
        this.slider.nativeElement.scrollTo({ left: 0 });
      }
    }, 2000);
  }
}
