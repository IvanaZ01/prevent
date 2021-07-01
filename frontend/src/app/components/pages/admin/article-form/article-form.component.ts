import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/api/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  dialogData: any;
  categoriesList: any = [];
  selectedCategories: any = [];

  articleForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0)]],
    discount: ['', [Validators.required, Validators.min(4), Validators.max(100)]],
    description: ['', [Validators.required]],
    categories: ['', []],
  });

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ArticleFormComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
    private _categoryService: CategoryService,
    private _notificationService: NotificationService,
  ) {
    this.dialogData = dialogData;

    const { article } = this.dialogData;
    this.articleForm.patchValue(article);
    this.populateCategoriesDropdown(article);
  }

  ngOnInit(): void {
    this.loadCategoriesList();
  }

  loadCategoriesList() {
    this._categoryService.getAll().subscribe(
      (success: any) => {
        console.log(success);
        this.categoriesList = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  onSubmit() {
    this.dialogRef.close(this.articleForm.value);
  }

  handleError(control: string, error: string) {
    return this.articleForm.controls[control].hasError(error);
  }

  populateCategoriesDropdown(article: any) {
    console.log(article);
    let categories: any[] = [];

    if (article?.categories) {
      article.categories.forEach((category: any) => {
        categories.push(category.id);
      });
  
      this.articleForm.patchValue({
        categories,
      });
    }
  }
  
}
