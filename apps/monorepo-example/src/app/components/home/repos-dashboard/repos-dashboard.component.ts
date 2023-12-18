import { ReposDashboardService } from './repos-dashboard.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from './entities';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { InputUrlComponent } from '../input-url/input-url.component';
@Component({
  selector: 'angular-monorepo-repos-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    InputUrlComponent,
  ],
  templateUrl: './repos-dashboard.component.html',
  styleUrl: './repos-dashboard.component.scss',
  providers: [ReposDashboardService],
})
export class ReposDashboardComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  title = 'angular-monorepo';
  displayedColumns: string[] = [
    'id',
    'name',
    'language',
    'visibility',
    'homepage',
    'description',
    'url',
    'forks',
    'allowForking',
    'watchers',
    'openIssues',
  ];
  /*  dataSource =  new MatTableDataSource<UserData[]>(); */
  dataSource: MatTableDataSource<UserData[]> = new MatTableDataSource<
    UserData[]
  >();

  userUrl: string = '';
  loadingData: boolean = false;

  constructor(
    private reposDashboardService: ReposDashboardService,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchRepo(url: string) {

    this.reposDashboardService
      .getRepos(url)
      .pipe(
        catchError((err) => {
          this.loadingData = false;
          this._snackBar.open('Link invalido', 'error');
          throw 'Error in source. Details: ' + err;
        })
      )
      .subscribe((data: any) => {


        const list = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          private: item.private,
          homepage: item.homepage,
          visibility: item.visibility,
          language: item.language,
          openIssues: item.open_issues_count,
          url: item.url,
          forks: item.forks,
          description: item.description,
          watchers: item.watchers,
          allowForking: item.allow_forking,
        }));
        // Update the MatTableDataSource with the new data
        this.dataSource.data = list;
        // Set up the paginator
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loadingData = false;
      });
  }
}
