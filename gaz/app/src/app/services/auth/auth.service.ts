import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
const { url } = environment;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(user): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(`${url}users/login`, user, {observe: 'response'});
  }

  password(user) {
    return this.http.post(`${url}users/password`, user);
  }
}
