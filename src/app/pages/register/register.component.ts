import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
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
    // (error) => {                             
    //   alert('Invalid username and or password')
    //   console.log(error);
    // }
    );
    
  }
  userobject1 : any={
    username:'',
    password:''

  }
  userService1 = inject(UserService)
  router1 =inject(Router)
  doLogin()
  {
    this.userService1.onLoginSubmit(this.userobject)
    .subscribe((result:any) =>
    {
      
      console.log(result);
      if( result && result.token)
      {
        this.router1.navigateByUrl("admin_dash");
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
