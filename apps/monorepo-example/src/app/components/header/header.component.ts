import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { languages } from './header.entities';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'angular-monorepo-header',
  standalone: true,
  imports: [MatIconModule, TranslateModule, CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly languages = languages;
  constructor( public translateService: TranslateService,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
      //TODO: should be done with env
      this.translateService.use(lang);
      this._snackBar.open("Lang has been changed", "ok");
  }
}
