import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoInputComponent } from './repo-input/repo-input.component';
import { ReposDashboardComponent } from './repos-dashboard/repos-dashboard.component';

@Component({
  selector: 'angular-monorepo-home',
  standalone: true,
  imports: [CommonModule, RepoInputComponent, ReposDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
