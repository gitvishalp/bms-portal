import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
response:any={}
userResponse:any={}
  constructor(private router:Router, private route:ActivatedRoute, private userService:UserserviceService){}
  ngOnInit(): void {
      if(localStorage.getItem("userLogin")!='true'){
           this.router.navigate(['/login'])
      }
  }
}
