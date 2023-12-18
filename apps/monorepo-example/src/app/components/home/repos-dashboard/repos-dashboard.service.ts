import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { UserData } from  './entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReposDashboardService {
  public $searchRepos: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  httpOptions: {};
  constructor( private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'json'
    };
   }


   getRepos(githubUserURL: string): Observable<UserData[]> {
    console.log("getRepos", githubUserURL)
    //TODO: consider cache with rxjs replay subject
    return this.http.get<UserData[]>(githubUserURL, this.httpOptions)
  }
}
