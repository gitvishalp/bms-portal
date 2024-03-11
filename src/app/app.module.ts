import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    OtpComponent,
    SignupformComponent,
    ForgetpasswordComponent,
    CallbackComponent,
    ResetpasswordComponent,
    MyportalComponent,
    UpdateaddressComponent,
    AccountsComponent,
    ServicesComponent,
    CardsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
