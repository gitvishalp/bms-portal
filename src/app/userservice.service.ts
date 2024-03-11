import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  response: any = {}
  apiUrl: String = 'http://localhost:8080/v1/user'
  IpAddress: any = ''

  getIp() {
    this.http.get<any>('https://geolocation-db.com/json/')
      .subscribe(res => {
        console.log(res.IPv4);
        this.IpAddress = res.IPv4;
      })
  }

  login(formData: { PhoneNumber: String, Password: String }): Observable<any> {
    const header = new HttpHeaders().set('IpAddress', '1.1.1.1');
    return this.http.post<any>(this.apiUrl + '/login', formData, { headers: header })
      .pipe(tap((Data) => {
    this.response = Data;
        if (this.response.Status == 200) {
          localStorage.setItem('userToken', this.response.Data.Token);
          localStorage.setItem('userLogin', 'true');
        }
      }))
  }
  sendOtp(formData: { PhoneNumber: String }) {
    return this.http.post(this.apiUrl + '/send-otp', formData);
  }
  verifyPhone(formDate: { PhoneNumber: String, Otp: String }) {
    return this.http.post(this.apiUrl + '/verify-phone', formDate);
  }
  signup(formdata: {}) {
    return this.http.post(this.apiUrl + '/signup', formdata);
  }
  forgetPassword(email:String){
    return this.http.post(this.apiUrl+`/forget-password/${email}`,{});
  }
  resetPasswordLink(query:String){
    return this.http.get(this.apiUrl+'/reset-password?'+query);
  }
  resetPassword(userKey:String,formData:{}){
    return this.http.post(this.apiUrl+'/reset-password?u='+userKey,formData);
  }
  getUserDetails(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get(this.apiUrl+'/',{headers:header})
  }
  updateAddress(formData:{}){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.post(this.apiUrl+'/update-address',formData,{headers:header})
  }
}
