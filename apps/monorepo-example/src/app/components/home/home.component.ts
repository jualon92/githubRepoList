import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposDashboardComponent } from './repos-dashboard/repos-dashboard.component';

@Component({
  selector: 'angular-monorepo-home',
  standalone: true,
  imports: [CommonModule, ReposDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
