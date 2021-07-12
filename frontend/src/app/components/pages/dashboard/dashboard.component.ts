import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { CategoryService } from 'src/app/services/api/category.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  articles:any;
  categories:any;
  filter = {search: '', category: 0}

  constructor(
    private _articleService: ArticleService, 
    private _notificationService: NotificationService,
    private _categoryService: CategoryService
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

    this._categoryService.getAll().subscribe(
      (success: any) => {
        this.categories = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }    
    );
    
  }
  
  wait(ms = 0){
    return new Promise((resolve)=>{
      setTimeout(resolve, ms)
    })
  }

  async search(){
    this.wait(1000)
    console.log(this.filter)
    this._articleService.getAll(this.filter).subscribe(
      (success: any) => {
        if(success.length>0){
          this.articles = success;
        }else if(Object.keys(success).length){
          this.articles = [success]
        }else{
          this.articles = []
        }
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }    
    );
  }

  setCat(category:number){
    this.filter.category = category
  }

  findCategory(){
    const test = this.categories.filter((category:any)=> category.id === this.filter.category)[0].name
    return test
  }

}
