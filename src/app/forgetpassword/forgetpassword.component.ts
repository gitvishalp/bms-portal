import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  ngOnInit(): void {
      
  }
  response:any={}
  Message:any=''
  constructor(private route:ActivatedRoute, private router:Router, private userService:UserserviceService){}
  
  forgetPassword(fromData:{Email:String}){
   console.log(fromData)
   this.userService.forgetPassword(fromData.Email).subscribe(m=>{
    this.response=m;
    if(this.response.Status==200){
      this.Message='Link sent to registered email!'
    }else{
      this.Message=this.response.Message;
    }
   })
  }
}
