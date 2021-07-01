import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { CategoryService } from 'src/app/services/api/category.service';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  isNavOpen = true;
  active = 'users';
  modalActive = false;
  adminNav = [
    {name:'Home', link: '/'},
    {name:'View all', link: '/admin', active: true},
    {name:'Add new', link: '/admin/manage'},
  ];

  constructor(
    
  ) {

  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

}
