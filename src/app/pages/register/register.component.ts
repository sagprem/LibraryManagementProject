import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userobject:any ={
    username:"",
    email:"",
    password:"",
    cpassword:""

  }
  userService = inject(UserService)
  router = inject(Router)
  doRegister()
  {
    this.userService.onLoginSubmit(this.userobject)
    .subscribe((result:any) =>
    {
      
      console.log(result);
      if( result && result.token)
      {
        this.router.navigateByUrl("admin_dash");
      }
      else
      {
        alert('error');
      }
    },
    (error) => {                             
      alert('Invalid username and or password')
      console.log(error);
    }
    );
    
  }

}
