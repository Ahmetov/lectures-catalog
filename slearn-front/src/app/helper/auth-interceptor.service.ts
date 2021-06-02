import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "../service/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
//Подставляет токе в запрос
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenStorageService) { }

  //перехват запроса и вставка туда токена в заголовок
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)})
    }

    return next.handle(authRequest);
  }
}

export const authInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
]
