import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SCHEDULE_PATH, SERVER_URL} from '../../../constant';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private baseUrl = SERVER_URL + SCHEDULE_PATH;

  constructor(private http: HttpClient) {}

  get<T>(): Observable<any> {
    return this.http.get<T>(this.baseUrl);
  }

  getWithParams<T>(params): Observable<any> {
    return this.http.get<T>(this.baseUrl, { params });
  }

  getListByQuery<T>(url: string, params): Observable<any> {
    return this.http.get<T>(this.baseUrl, { params });
  }

  create<T>(params = {}): Observable<any> {
    return this.http.post<T>(this.baseUrl, params);
  }
}
