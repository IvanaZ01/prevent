import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/api/article.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ArticleFormComponent } from '../article-form/article-form.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: any = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'discount', 'actions'];

  constructor(
    private _dialog: MatDialog,
    private _articleService: ArticleService,
    private _notificationService: NotificationService,
  ) {

  }

  ngOnInit(): void {
    this.loadArticleData();
  }

  loadArticleData() {
    this._articleService.getAll().subscribe(
      (success: any) => {
        this.articles = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  updateArticleModal(article: any) {
    const dialogRef = this._dialog.open(ArticleFormComponent, {
      width: '450px',
      data: {
        title: 'Update article',
        article,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id = article.id;
      this.updateArticle(result);
    });
  }

  createArticleModal() {
    const dialogRef = this._dialog.open(ArticleFormComponent, {
      width: '450px',
      data: {
        title: 'Create new article',
      }
    });

    dialogRef.afterClosed().subscribe(article => {
      this.saveArticle(article);
    });
  }

  saveArticle(article: any) {
    this._articleService.create(article).subscribe(
      (success: any) => {
        this._notificationService.success('Article has been successfully created.');
        this.loadArticleData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  updateArticle(article: any) {
    this._articleService.update(article).subscribe(
      (success: any) => {
        this._notificationService.success('Article has been successfully updated.');
        this.loadArticleData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  deleteArticle(article: any) {
    this._articleService.delete(article.id).subscribe(
      (success: any) => {
        this._notificationService.success('Article has been successfully deleted.');
        this.loadArticleData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }
  
}
