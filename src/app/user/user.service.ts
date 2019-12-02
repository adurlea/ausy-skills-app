import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser []> {
    return this.httpClient.get<IUser []>(this.userUrl).pipe(
      tap(datat => console.log('All: ' + JSON.stringify(datat))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend errpr
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
