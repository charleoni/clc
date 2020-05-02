import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prospect } from '../../models/prospect.model';

import { environment } from '../../../environments/environment';
const { server } = environment;

@Injectable({
    providedIn: 'root'
})
export class ProspectService {

    constructor(private http: HttpClient) {}

    save(prospect: Prospect): Observable<any> {
        return this.http.post<Prospect>(`${server}/prospects`, prospect);
    }


}