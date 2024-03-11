import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

loginData:any={}
response:any={}
Message:any=''
constructor(private router:Router,private route:ActivatedRoute, private userService:UserserviceService){}
ngOnInit(): void {
    if(localStorage.getItem("userLogin")==='true'){
        this.router.navigate(['/home'])
    }
}

login(formData:{PhoneNumber:String,Password:String}){
     console.log(formData);
     this.userService.login(formData).subscribe(res=>{
       this.response=res;
       if(this.response.Status==200){
        this.router.navigate(['/home']);
       }else{
        this.Message=this.response.Message;
       }
     })
}
}
