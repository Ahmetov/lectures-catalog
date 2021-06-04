import {Injectable} from '@angular/core';
import {Lecture} from "../model/lecture";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/lectures';

@Injectable({
  providedIn: 'root'
})
export class LectureService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(URL);
  }

  create(lecture: Lecture): Observable<any> {
    return this.http.post<Lecture>(URL, lecture);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + `/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(URL + `/${id}`);
  }

  update(lecture: Lecture): Observable<any> {
    return this.http.put(URL, lecture);
  }

}
