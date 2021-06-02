import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lecture} from "../model/lecture";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";

const URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(URL);
  }

  create(user: User): Observable<any> {
    return this.http.post<User>(URL, user);
  }

  authenticate(credentials: any): Observable<any> {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.get('user', {headers: headers});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + `/${id}`);
  }
}
