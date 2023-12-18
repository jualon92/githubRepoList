import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyErrorStateMatcher } from './validator';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'angular-monorepo-repo-input',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule , MatButtonModule ],
  templateUrl: './repo-input.component.html',
  styleUrl: './repo-input.component.scss',
})
export class RepoInputComponent {
  userUrl:string = "";
  repoFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor() {}

  searchRepo($event: Event) {
    if (this.repoFormControl.invalid) {
      return;
    }
  }
}
