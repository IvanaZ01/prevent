import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ResetPasswordRequestComponent } from './components/pages/reset-password-request/reset-password-request.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ArticlesComponent } from './components/pages/admin/articles/articles.component';
import { CategoriesComponent } from './components/pages/admin/categories/categories.component';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'reset-password-request',
    component: ResetPasswordRequestComponent,
  },
  {
    path:'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ],
  },
  {
    path:'users',
    component: UsersComponent,
    canActivate: [ AuthGuardAdminService ],
  },
  {
    path:'articles',
    component: ArticlesComponent,
    canActivate: [ AuthGuardAdminService ],
  },
  {
    path:'categories',
    component: CategoriesComponent,
    canActivate: [ AuthGuardAdminService ],
  },
  {
    path:'',
    component: DashboardComponent,
    canActivate: [ AuthGuardService ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
