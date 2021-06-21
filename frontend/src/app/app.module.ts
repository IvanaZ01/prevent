import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NotifierModule, NotifierOptions } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NotificationService } from './services/notification.service';
import { ApiService } from './services/api/api.service';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { NewPasswordComponent } from './components/pages/new-password/new-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/pages/admin-manage/admin-manage.component';
import { AdminViewComponent } from './components/pages/admin-view/admin-view.component';
import { UserViewComponent } from './components/pages/user-view/user-view.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ResetPasswordComponent, NewPasswordComponent, NavbarComponent, AdminComponent, AdminViewComponent, UserViewComponent, ArticleCardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(notifierDefaultOptions),
  ],
  providers: [NotificationService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
