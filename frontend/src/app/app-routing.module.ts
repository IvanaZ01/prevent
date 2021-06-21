import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin-manage/admin-manage.component';
import { AdminViewComponent } from './components/pages/admin-view/admin-view.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewPasswordComponent } from './components/pages/new-password/new-password.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { UserViewComponent } from './components/pages/user-view/user-view.component';

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
  },
  {
    path:'admin/manage', component: AdminComponent
  },
  {
    path:'admin', component: AdminViewComponent
  },
  {
    path:'', component:UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
