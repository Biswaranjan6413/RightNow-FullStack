import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component'; 
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
    { path: '', redirectTo: 'prepaid', pathMatch: 'full' },
  { path: 'prepaid', component: PrepaidComponent },
  { path: 'recharge/:mobile', component: RechargeComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
