import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProspectModel } from '../../models/prospect.model';
const { url } = environment;

@Injectable({
  providedIn: 'root'
})

export class ProspectsService {

  constructor(private http: HttpClient) { }

  create(data: ProspectModel) {
    return this.http.post(`${url}prospects`, data);
  }
}
