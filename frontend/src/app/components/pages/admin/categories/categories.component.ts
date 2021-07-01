import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/api/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(
    private _dialog: MatDialog,
    private _categoryService: CategoryService,
    private _notificationService: NotificationService,
  ) {

  }

  ngOnInit(): void {
    this.loadCategoryData();
  }

  loadCategoryData() {
    this._categoryService.getAll().subscribe(
      (success: any) => {
        this.categories = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  updateCategoryModal(category: any) {
    const dialogRef = this._dialog.open(CategoryFormComponent, {
      width: '450px',
      data: {
        title: 'Update category',
        category,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id = category.id;
      this.updateCategory(result);
    });
  }

  createCategoryModal() {
    const dialogRef = this._dialog.open(CategoryFormComponent, {
      width: '450px',
      data: {
        title: 'Create new category',
      }
    });

    dialogRef.afterClosed().subscribe(category => {
      this.saveCategory(category);
    });
  }

  saveCategory(category: any) {
    this._categoryService.create(category).subscribe(
      (success: any) => {
        this._notificationService.success('Category has been successfully created.');
        this.loadCategoryData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  updateCategory(category: any) {
    this._categoryService.update(category).subscribe(
      (success: any) => {
        this._notificationService.success('Category has been successfully updated.');
        this.loadCategoryData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  deleteCategory(category: any) {
    this._categoryService.delete(category.id).subscribe(
      (success: any) => {
        this._notificationService.success('Category has been successfully deleted.');
        this.loadCategoryData();
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }
  
}
