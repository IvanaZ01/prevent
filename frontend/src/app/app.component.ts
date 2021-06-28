import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from './services/notification.service';
import { UserStoreService } from './stores/user-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prevent.';
  user: any = null;

  constructor(
    private _notificationService: NotificationService,
    private _router: Router,
    private _userStoreService: UserStoreService,
  ) {

  }

  ngOnInit(): void {
    this._userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this._userStoreService.updateUser(null);
    this._notificationService.success('You have successfully logged out.');
    this._router.navigateByUrl('/login');
  }

}
