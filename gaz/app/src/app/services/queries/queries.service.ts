import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const { url } = environment;

@Injectable({
  providedIn: 'root'
})

export class QueriesService {

  constructor(private http: HttpClient) { }

  query(params: any) {
    return this.http.post(`${url}queries/query`, params);
  }

  report(params: any) {
    return this.http.post(`${url}queries/report`, params);
  }
}
