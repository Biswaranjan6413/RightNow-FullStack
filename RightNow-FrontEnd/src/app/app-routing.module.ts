import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component'; 
import { RegisterComponent } from './register/register.component';
import { RegstrationAddressComponent } from './regstration-address/regstration-address.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
    { path: '', redirectTo: 'prepaid', pathMatch: 'full' },
  { path: 'prepaid', component: PrepaidComponent },
  { path: 'recharge/:mobile', component: RechargeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register-address', redirectTo: 'register-address', pathMatch: 'full' },
  { path: 'register-address', component: RegstrationAddressComponent },
  { path: 'registration', redirectTo: 'registraion', pathMatch: 'full' },
  { path: 'registration' , component: RegistrationComponent},
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
