import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  isNavOpen = true;
  userNav = [{name: 'Home', link: '/user', active: true}]
  articles:any;

  constructor(
    private articleHttp: ArticleService, 
    private _notificationService: NotificationService,
    ) { }

  ngOnInit(): void {
    this.articleHttp.getAll().subscribe(
      articles => this.articles = articles,
      error => this._notificationService.error(error)      
    )
  }

  setNavState(event: any) {
    this.isNavOpen = event;
  }

}
