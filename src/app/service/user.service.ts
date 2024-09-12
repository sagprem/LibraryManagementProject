import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onLoginSubmit(userobj:any){
    console.log(userobj)
    return this.http.post('',userobj)
  }
}
