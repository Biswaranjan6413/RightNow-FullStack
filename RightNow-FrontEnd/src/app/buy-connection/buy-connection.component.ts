import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-connection',
  templateUrl: './buy-connection.component.html',
  
  styleUrls: ['./buy-connection.component.css']
})
export class BuyConnectionComponent {

   connections = [
    { name: 'Wi-Fi', icon: 'wifi', route: '/wifi' },
    { name: 'Postpaid', icon: 'sim_card', route: '/postpaid' },
    { name: 'Prepaid', icon: 'currency_rupee', route: '/prepaid' },
    
  ];
}
