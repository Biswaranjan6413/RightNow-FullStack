import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RegisterComponent } from './register/register.component';
import { BuyConnectionComponent } from './buy-connection/buy-connection.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RegstrationAddressComponent } from './regstration-address/regstration-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { OffersComponent } from './offers/offers.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BuyConnectionComponent,
    RecommendedComponent,
    RegstrationAddressComponent,
    PrepaidComponent,
    RechargeComponent,
    RegisterComponent,
    BuyConnectionComponent,
    RecommendedComponent,
    RegstrationAddressComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    AboutUsComponent,
    CareersComponent,
    OffersComponent,
    HelpCenterComponent,
    ContactUsComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
