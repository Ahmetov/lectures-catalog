import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getLectureReport(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(URL + `/ + ${id}`, { headers: headers, responseType: 'blob' });
  }
}
