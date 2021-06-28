import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  articles:any;

  constructor(
    private _articleService: ArticleService, 
    private _notificationService: NotificationService,
    ) {
      
    }

  ngOnInit(): void {
    this._articleService.getAll().subscribe(
      (success: any) => {
        this.articles = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }    
    );
  }
  
}
