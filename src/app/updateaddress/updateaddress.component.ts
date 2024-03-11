import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.component.html',
  styleUrls: ['./updateaddress.component.css']
})
export class UpdateaddressComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private userService:UserserviceService){}
  response:any={}
  Message:any=''
  ngOnInit(): void {
      if(localStorage.getItem("userLogin")!='true'){
        this.router.navigate(['/login'])
      }
  }

  updateAddress(formData:{}){
    this.userService.updateAddress(formData).subscribe(m=>{
    this.response=m;
    this.Message=this.response.Message;
    if(this.response.Status==200){
      this.router.navigate(['/my-portal'])
    }
    })
  }


}
