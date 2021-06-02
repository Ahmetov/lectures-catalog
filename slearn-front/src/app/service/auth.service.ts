import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(credentials: any): Observable<any> {
    return this.http.post(URL + 'auth', credentials);
  }

  public registration(user: any): Observable<any> {
    return this.http.post(URL + 'registration', user);
  }


}
