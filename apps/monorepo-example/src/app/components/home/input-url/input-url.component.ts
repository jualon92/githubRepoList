import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MyErrorStateMatcher } from './validator';


@Component({
  selector: 'angular-monorepo-input-url',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './input-url.component.html',
  styleUrl: './input-url.component.scss',
})
export class InputUrlComponent {
  repoFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  @Output() setURL: EventEmitter<string> = new EventEmitter<string>();
  searchRepo($event: any){
    this.setURL.emit(this.repoFormControl.value ?? "");
  }
}
