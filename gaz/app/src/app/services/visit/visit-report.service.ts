import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const { url } = environment;

@Injectable({
  providedIn: 'root'
})

export class VisitReportService {

  constructor(private http: HttpClient) { }

  update(id, data) {
    return this.http.put(`${url}visit-reports/${id}`, data);
  }
}
