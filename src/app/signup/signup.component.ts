import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {
      
  }
constructor(private router:Router, private userService:UserserviceService ){}

response:any={}
Message:any=''
  sendOtp(formData:{PhoneNumber:String}){
    console.log(formData);
    this.userService.sendOtp(formData).subscribe(m=>{
      this.response=m;
      if(this.response.Status==200){
         this.Message="OTP Sent!"
         setTimeout(()=>{                           
          this.router.navigate(['/otp'],{queryParams:{PhoneNumber:formData.PhoneNumber}});
        }, 3000);
      }else{
        this.Message=this.response.Message;
      }
    })
  }
}
