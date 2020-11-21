import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { throwError } from 'rxjs'
import { tap } from 'rxjs/operators'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WebrequestinterceptorService {

  constructor(private authentication: AuthenticationService) { }

  refreshingAccessToken: boolean;
  accessTokenRefreshed: Subject<any> = new Subject();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      request = this.addToken(request);
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          
          if ((error.status === 401 || error.status === 403)) {

              return this.refreshAccessToken()
                .pipe(
                    switchMap(() => {
                    request = this.addToken(request);
                    return next.handle(request);
                }),
                catchError((error: any) => {
                    console.log(error)
                    this.authentication.logout();
                    return empty();
                })
              )            
          }          
          return throwError(error);
        })
      )      
  }

  addToken(request: HttpRequest<any>) {
      const token = this.authentication.getAccessToken();

      if (token) {
          return request.clone({
            setHeaders: {
                'x-access-token': token
            }
          })
      }

      return request;
  }

  refreshAccessToken() {
      return this.authentication.getNewAccessToken().pipe(
        tap( () => {
            this.refreshingAccessToken = false;
            console.log("Access Token Refreshed")
        })
      )
  }
}
