import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnDestroy {
  private _authSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public get isAuthenticated$(): Observable<boolean> {
    return this._authSub$.asObservable();
  }

  constructor(private _router: Router, private readonly http: HttpClient) {}

  public ngOnDestroy(): void {
    this._authSub$.next(false);
    this._authSub$.complete();
  }


  login(user: User) {
    console.log(user)
    return this.http.post(`${environment.apiUrl}/api/login`, user).subscribe(responseData => {
      console.log("hice el post")
    });;
  }
}
