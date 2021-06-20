import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { CategoryService } from 'src/app/services/api/category.service';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  isNavOpen = true;
  users: any;
  articles: any;
  categories: any;
  active = 'users';

  constructor(
    private _notificationService: NotificationService,
    private userHttp: UserService,
    private articleHttp: ArticleService,
    private categoryHttp: CategoryService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userHttp.getAll().subscribe(
      (users) => {
        this.users = users;
        this.active = 'users';
      },
      (error) => this._notificationService.error(error)
    );
  }

  getArticles() {
    this.articleHttp.getAll().subscribe(
      (articles) => {
        this.articles = articles
        this.active = 'articles'
      },
      (error) => this._notificationService.error(error)
    );
  }

  getCategories() {
    this.categoryHttp.getAll().subscribe(
      (categories) => {
        this.categories = categories
        this.active = 'categories'
      },
      (error) => this._notificationService.error(error)
    );
  }

  setNavState(event: any) {
    this.isNavOpen = event;
  }
}
