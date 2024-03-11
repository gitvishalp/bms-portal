import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit{
 response:any={}
 requestBody:any={}
 otp:String='';
 Message:any=''
 phoneNumber = this.route.snapshot.queryParamMap.get("PhoneNumber")
  ngOnInit(): void {
    if(this.phoneNumber==null){
      this.router.navigate(['/signup']);
    }
  }
  constructor(private userService:UserserviceService,private router:Router, private route:ActivatedRoute){}

  verifyOtp(formDate:{t1:String,t2:String,t3:String,t4:String}){
    this.otp= this.otp.concat(formDate.t1.toString(),formDate.t2.toString(),formDate.t3.toString(),formDate.t4.toString());
    this.requestBody={PhoneNumber:this.phoneNumber,Otp:this.otp}
    console.log(this.requestBody);
   this.userService.verifyPhone(this.requestBody).subscribe(m=>{
        this.response=m;
        this.Message=this.response.Message;
        if(this.response.Status==200){
          this.router.navigate(['/signup-form'],{queryParams:{PhoneNumber:this.phoneNumber}})
        }
    })
  }
}
