import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MenusService {

  constructor(private http: HttpClient) { }

  getNavBarMenu() {
    return this.http.get('/assets/menus/navbar.json');
  }

  getMenu() {
    return this.http.get('/assets/menus/menu.json');
  }
}
