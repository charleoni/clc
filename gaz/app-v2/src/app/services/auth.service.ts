import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

const { server } = environment;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public redirectUrl: string;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private router: Router,
    ) {

    }

    login(login: Login): Observable<User> {
        return this.http.post<User>(`${server}/users/login`, {...login});
    }

    async logout(): Promise<void> {
        await this.storage.destroy('user');
        await this.storage.destroy('token');
        await this.router.navigate(['/login'], { replaceUrl: true });
    }

    hasLogin(): boolean {
        return true;
    }

}