import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
 
  PhoneNumber= this.route.snapshot.queryParamMap.get("PhoneNumber");
  country:any='INDIA'
  response:any={}
  Message:any='';
  constructor(private router:Router, private route:ActivatedRoute,private userService:UserserviceService){
  }

  ngOnInit(): void {
      if(this.PhoneNumber==null){
        this.router.navigate(['/signup'])
      }
  }

  signup(formData:{}){
     console.log(formData);
     this.userService.signup(formData).subscribe(m=>{
      this.response=m;
      if(this.response.Status==200){
         this.Message=this.response.Message;
         this.router.navigate(['/login'])
      }else{
        this.Message=this.response.Message;
      }
     })
  }
}
