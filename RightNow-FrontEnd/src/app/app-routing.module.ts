import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { OffersComponent } from './offers/offers.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PostPaidComponent } from './postpaid/postpaid.component';
import { ViewPlanComponent } from './viewplan/viewplan.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'prepaid', component: PrepaidComponent },
  { path: 'recharge/:mobile', component: RechargeComponent },

  { path: 'registration', redirectTo: 'registraion', pathMatch: 'full' },
  { path: 'registration' , component: RegistrationComponent},
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},

  { path: 'about-us', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent},
   { path: 'careers', redirectTo: 'careers', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent},
  { path: 'offers', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent},
  { path: 'help-center', redirectTo: 'help-center', pathMatch: 'full' },
  { path: 'help-center', component: HelpCenterComponent},
  { path: 'contact-us', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'faqs', redirectTo: 'faqs', pathMatch: 'full' },
  { path: 'faqs', component: FaqsComponent},
   { path: 'privacy-policy', redirectTo: 'privacy-policy', pathMatch: 'full' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-conditions', component: TermsConditionsComponent},
 {path: 'postpaid', component: PostPaidComponent},
  {path: 'viewplan', component: ViewPlanComponent},

  { path: 'about-us', component: AboutUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },

  { path: 'post', component: PostPaidComponent },
  { path: 'viewplan', component: ViewPlanComponent },
  {path: 'register-complaint', component: RegisterComplaintComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
