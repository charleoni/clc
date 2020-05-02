import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {

    constructor(private http: HttpClient) {}

    getNavbarMenu() {
        return this.http.get('/assets/navbar/navbar.json');
    }

}