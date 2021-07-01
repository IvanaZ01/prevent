import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotificationComponent } from './component/notification/notification.component';
import { ApiService } from './services/api/api.service';
import { NotificationService } from './services/notification.service';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ResetPasswordRequestComponent } from './components/pages/reset-password-request/reset-password-request.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ArticlesComponent } from './components/pages/admin/articles/articles.component';
import { CategoriesComponent } from './components/pages/admin/categories/categories.component';
import { ArticleFormComponent } from './components/pages/admin/article-form/article-form.component';
import { CategoryFormComponent } from './components/pages/admin/category-form/category-form.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { MatSnackBarConfig, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const matSnackbarDefaultConfig: MatSnackBarConfig = {
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
  duration: 4000,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordRequestComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ArticleCardComponent,
    ProfileComponent,
    NotificationComponent,
    UsersComponent,
    ArticlesComponent,
    CategoriesComponent,
    ArticleFormComponent,
    CategoryFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    FlexLayoutModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    FlexLayoutModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    NotificationService,
    ApiService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: matSnackbarDefaultConfig,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
