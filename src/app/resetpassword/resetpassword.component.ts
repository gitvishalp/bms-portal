import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private userService:UserserviceService){}

  userKey:any=''
  Message:any=''
  requestBody:any={}
  response:any={}
  ngOnInit(): void {
    this.userKey = this.route.snapshot.queryParamMap.get("u");
    if(this.userKey==null){
      this.router.navigate(['/forget-password']);
    }
}

resetPassword(formData:{NewPassword:String, ConfirmPassword:String}){
   if(formData.NewPassword===formData.ConfirmPassword){
      this.requestBody.NewPassword= formData.NewPassword;
      this.userService.resetPassword(this.userKey,this.requestBody)
      .subscribe(m=>{
        this.response=m;
        this.Message=this.response.Message;
        if(this.response.Status==200){
          this.router.navigate(['/login'])
        }
      })
   }else{
    this.Message='Confirm Password should be same!'
   }
}
}
