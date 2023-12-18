import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'angular-monorepo-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor() { }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    console.log(lang);
  }
}
