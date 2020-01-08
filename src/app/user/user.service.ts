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
  baseUrl = 'http://localhost:3000/';
  usersPathParam = 'users';
  userPathParam = 'user';
  newUserPathParam = 'newuser';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser []> {
    return this.httpClient.get<IUser []>(`${this.baseUrl}${this.usersPathParam}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.baseUrl}${this.userPathParam}/${id}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postNewUser(newUser: IUserNew): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.baseUrl}${this.newUserPathParam}`, newUser).pipe(
      tap(data => console.log('New User: ' + JSON.stringify(data))),
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
