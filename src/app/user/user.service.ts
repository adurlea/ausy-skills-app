import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUserNew } from './user-new';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000/';
  usersPathParam: string = 'users';
  userPathParam: string = 'user';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser []> {
    return this.httpClient.get<IUser []>(`${this.baseUrl}${this.usersPathParam}`).pipe(
      tap(datat => console.log('All: ' + JSON.stringify(datat))),
      catchError(this.handleError)
    );
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.baseUrl}${this.userPathParam}/${id}`).pipe(
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

  postNewUser(newUser: IUserNew): Observable<IUserNew> {
    return of(newUser);
  }
}
