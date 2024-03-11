import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-myportal',
  templateUrl: './myportal.component.html',
  styleUrls: ['./myportal.component.css']
})
export class MyportalComponent implements OnInit {

  userResponse:any={}
  addressResponse:any={}
  hasAddress:any=false;
  constructor(private router:Router, private route:ActivatedRoute, private userService:UserserviceService){}

  ngOnInit(): void {
      if(localStorage.getItem("userLogin")!='true'){
        this.router.navigate(['/login'])
      }else{
        this.userService.getUserDetails().subscribe((m:any)=>{
          this.userResponse=m.Data;
          if(this.userResponse.Address){
            this.hasAddress=true;
            this.addressResponse=this.userResponse.Address;
          }
        })
      }
  }

}
