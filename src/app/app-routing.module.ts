import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CallbackComponent } from './callback/callback.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MyportalComponent } from './myportal/myportal.component';
import { UpdateaddressComponent } from './updateaddress/updateaddress.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ServicesComponent } from './services/services.component';
import { CardsComponent } from './cards/cards.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'reset-password-Link',component:CallbackComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'otp',component:OtpComponent},
  {path:'signup-form',component:SignupformComponent},
  {path:'forget-password',component:ForgetpasswordComponent},
  {path:'reset-password',component:ResetpasswordComponent},
  {path:'my-portal',component:MyportalComponent},
  {path:'update-address',component:UpdateaddressComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'services', component:ServicesComponent},
  {path:'cards',component:CardsComponent},
  {path:'transactions',component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
