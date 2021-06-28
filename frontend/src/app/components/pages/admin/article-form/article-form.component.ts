import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  dialogData: any;

  articleForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0)]],
    discount: ['', [Validators.required, Validators.min(4), Validators.max(100)]],
    description: ['', [Validators.required]],
  });

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ArticleFormComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    this.dialogData = dialogData;

    const { article } = this.dialogData;
    this.articleForm.patchValue(article);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.articleForm.value);
    this.dialogRef.close(this.articleForm.value);
  }

  handleError(control: string, error: string) {
    return this.articleForm.controls[control].hasError(error);
  }
  
}
