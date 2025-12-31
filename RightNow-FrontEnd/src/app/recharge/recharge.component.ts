import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

interface Pack {
  price: number;
  data: string;
  validity: string;
  speed: string;
  offer: string;
  extraBenefits?: string[];
}

interface Tab {
  id: string;
  label: string;
  plans: Pack[];
}

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  @ViewChild('scrollArea') scrollArea!: ElementRef;

  searchText = '';
  activeTab = 'recommended';
  selectedPack: Pack | null = null; 

  tabs: Tab[] = [];

  ngOnInit() {
    this.tabs = [
      {
        id: 'recommended',
        label: 'Recommended Packs',
        plans: [
          { price: 999, data: '100GB', validity: '30 Days', speed: '150 Mbps', offer: 'Unlimited Streaming', extraBenefits:['OTT Subscription','Extra 5G Data'] },
          { price: 1299, data: '200GB', validity: '60 Days', speed: '200 Mbps', offer: 'Gaming Optimized', extraBenefits:['Gaming Boost','Premium Support'] },
          { price: 1599, data: '300GB', validity: '90 Days', speed: '250 Mbps', offer: 'Premium OTT + Rollover', extraBenefits:['Rollover Data','Netflix + Prime'] }
        ]
      },
      {
        id: 'highspeed',
        label: 'High Speed 5G Plans',
        plans: [
          { price: 1999, data: '500GB', validity: '30 Days', speed: '500 Mbps', offer: 'Ultra HD Streaming', extraBenefits:['Unlimited 5G Data','HD OTT'] },
          { price: 2499, data: '1TB', validity: '60 Days', speed: '1 Gbps', offer: 'Ultimate Gaming Pack', extraBenefits:['Gaming Optimized','Fast Support'] }
        ]
      },
      {
        id: 'data',
        label: 'Data Packs',
        plans: [
          { price: 499, data: '50GB', validity: '15 Days', speed: '100 Mbps', offer: 'Extra Booster', extraBenefits:['Extra 5G Data'] },
          { price: 799, data: '100GB', validity: '30 Days', speed: '150 Mbps', offer: 'Heavy Data Pack', extraBenefits:['Rollover Data'] }
        ]
      },
      {
        id: 'monthly',
        label: 'Monthly Packs',
        plans: [
          { price: 1499, data: '300GB', validity: '30 Days', speed: '200 Mbps', offer: 'Monthly Saver Pack', extraBenefits:['OTT Subscription','Extra Data'] },
          { price: 2799, data: '600GB', validity: '60 Days', speed: '400 Mbps', offer: 'High Volume Pack', extraBenefits:['Premium Support','Unlimited Data'] }
        ]
      },
      {
        id: 'entertainment',
        label: 'Entertainment Packs',
        plans: [
          { price: 899, data: 'Unlimited', validity: '30 Days', speed: '200 Mbps', offer: 'Netflix + Prime Video', extraBenefits:['OTT Subscription'] },
          { price: 1299, data: 'Unlimited', validity: '60 Days', speed: '300 Mbps', offer: 'Full OTT Suite', extraBenefits:['All OTT Platforms'] }
        ]
      }
    ];
  }


  private isHeadingMatch(tab: Tab): boolean {
    if (!this.searchText) return false;
    return tab.label.toLowerCase().includes(this.searchText.toLowerCase().trim());
  }

  shouldShowSection(tab: Tab): boolean {
    if (!this.searchText) return true;

    const matchedTab = this.tabs.find(t =>
      t.label.toLowerCase().includes(this.searchText.toLowerCase().trim())
    );

    if (matchedTab) {
      return tab.id === matchedTab.id;
    }

    return this.getFilteredPlans(tab.plans, tab).length > 0;
  }

  getFilteredPlans(plans: Pack[], tab?: Tab) {
    if (!this.searchText) return plans;

    if (tab && this.isHeadingMatch(tab)) {
      return plans;
    }

    const search = this.searchText.toLowerCase();
    return plans.filter(plan =>
      Object.values(plan).join(' ').toLowerCase().includes(search)
    );
  }

  scrollToFirstMatch() {
    const matchedTab = this.tabs.find(t =>
      t.label.toLowerCase().includes(this.searchText.toLowerCase().trim())
    );

    if (matchedTab) {
      setTimeout(() => {
        document.getElementById(matchedTab.id)
          ?.scrollIntoView({ behavior: 'smooth' });
      });
      this.activeTab = matchedTab.id;
    }
  }

  get showNoResults(): boolean {
    if (!this.searchText) return false;

    return !this.tabs.some(tab =>
      this.getFilteredPlans(tab.plans, tab).length > 0
    );
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.activeTab = id;
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;

    for (let tab of this.tabs) {
      const section = document.getElementById(tab.id);
      if (section && scrollTop >= section.offsetTop - 200) {
        this.activeTab = tab.id;
      }
    }
  }


  openPackDetails(pack: Pack) {
    this.selectedPack = pack;
  }

  closeModal() {
    this.selectedPack = null;
  }

  goToEligibility(pack: Pack) {
    window.location.href = `/eligibility?price=${pack.price}&data=${pack.data}&validity=${pack.validity}&speed=${pack.speed}&offer=${pack.offer}`;
  }
}
