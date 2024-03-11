import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit{
   
  email:any=''
  code:any=''
  query:any=''
  response:any={}
  constructor(private route:ActivatedRoute, private router:Router, private userService:UserserviceService){}
  ngOnInit(): void {
      this.email= this.route.snapshot.queryParamMap.get("e");
      this.code=this.route.snapshot.queryParamMap.get("c");
      if(this.email==null || this.code==null){
        this.router.navigate(['/forget-password'])
      }else{
        this.query='e='+this.email+'&c='+this.code;
        this.userService.resetPasswordLink(this.query)
        .subscribe(m=>{
          this.response=m;
          if(this.response.Status==200){
            this.router.navigate(['/reset-password'],{queryParams:{u:this.response.Data}});
          }else{
            this.router.navigate(['/forget-password']);
          }
        })
      }
  }
}
