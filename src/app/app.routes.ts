import { Routes } from '@angular/router';
import { register } from 'node:module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { UserDashComponent } from './pages/user-dash/user-dash.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'register',
        pathMatch:'full',
       
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'user',
        component:UserDashComponent
    }
   

    
    

];
