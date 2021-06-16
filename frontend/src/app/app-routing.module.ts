import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'reset-password', component: ResetPasswordComponent
  },
  {
    path:'new-password', component: NewPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
