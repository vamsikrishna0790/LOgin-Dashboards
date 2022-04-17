import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'forgotpwd', component: ForgotpasswordComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
