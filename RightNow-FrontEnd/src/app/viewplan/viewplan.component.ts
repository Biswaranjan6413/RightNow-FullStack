import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Plan {
  title: string;
  price: number;
  speed: string;
  data: string;
  ott: string[];
}

@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.css']
})
export class ViewPlanComponent {

  activePlan: Plan | null = null;

  constructor(private router: Router) {}

  plans: Plan[] = [
    { title: 'Basic Wi-Fi', price: 499, speed: '40 Mbps', data: 'Unlimited', ott: ['Xstream','Wynk'] },
    { title: 'Entertainment', price: 699, speed: '100 Mbps', data: 'Unlimited', ott: ['Prime','Hotstar'] },
    { title: 'Family', price: 899, speed: '200 Mbps', data: 'Unlimited', ott: ['Prime','Wynk'] },
    { title: 'Work From Home', price: 1099, speed: '300 Mbps', data: 'Unlimited', ott: ['Prime','Hotstar','Wynk'] },
    { title: 'Ultra Speed', price: 1499, speed: '500 Mbps', data: 'Unlimited', ott: ['Netflix','Prime'] },
    { title: 'Giga Home', price: 1999, speed: '1 Gbps', data: 'Unlimited', ott: ['All OTT Apps'] }
  ];

  open(plan: Plan) {
    this.activePlan = plan;
  }

  close() {
    this.activePlan = null;
  }

  buy(plan: Plan) {

    alert(`Selected plan ₹${plan.price}`);
    this.router.navigate(['/payment'], { state: { plan } });
}
}
