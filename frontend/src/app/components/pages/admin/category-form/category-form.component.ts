import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  dialogData: any;

  categoryForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    this.dialogData = dialogData;

    const { category } = this.dialogData;
    this.categoryForm.patchValue(category);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.dialogRef.close(this.categoryForm.value);
  }

  handleError(control: string, error: string) {
    return this.categoryForm.controls[control].hasError(error);
  }
  
}
