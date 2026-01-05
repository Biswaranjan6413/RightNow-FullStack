import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  faqs = [
    {
      question: 'What is the starting price of RightNow Wi-Fi plans?',
      answer: 'Our Wi-Fi broadband plans start from ₹499 per month.',
      open: false
    },
    {
      question: 'Is Wi-Fi installation free?',
      answer: 'Yes, free installation is available for selected Wi-Fi plans.',
      open: false
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation is usually completed within 24–48 hours after booking.',
      open: false
    },
    {
      question: 'What should I do if my internet is slow?',
      answer: 'Restart your router. If the issue continues, visit the Help Center or contact support.',
      open: false
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can call 1800-123-456 or reach us through the Contact Us page.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
