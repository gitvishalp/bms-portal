import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
response:any={}
userResponse:any={}
Message:any=''
  constructor(private router:Router, private route:ActivatedRoute, private userService:UserserviceService){}
  ngOnInit(): void {
      if(localStorage.getItem("userLogin")!='true'){
          this.router.navigate(['/login']);
      }else{
        this.userService.getUserDetails()
        .subscribe(m=>{
          this.response=m;
          console.log(this.response)
          this.userResponse=this.response.Data;
        })
      }
  }
  Logout(){
    localStorage.setItem('userLogin','false');
    localStorage.setItem('userToken','none');
    this.router.navigate(['/login'])
  }
}
