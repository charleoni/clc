import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pos } from '../../models/pos.model';
import { StorageService } from '../storage.service';

import { environment } from '../../../environments/environment';
import {City} from '../../models/city.model';
const { server } = environment;

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    public redirectUrl: string;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
    ) {}

    getPos(profile: string, code: string): Observable<Pos[]> {
        return this.http.post<Pos[]>(`${server}/queries/pos-list`, { profile, params: { code }});
    }

    getCities(): Observable<City[]> {
        return this.http.post<City[]>(`${server}/queries/query`, { query: "cities" });
    }

    query(params: any): Observable<any> {
        return this.http.post<any>(`${server}/queries/query`, params);
    }

}