import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PosVisit } from '../../models/pos_visit.model';

import { environment } from '../../../environments/environment';
const { server } = environment;

@Injectable({
    providedIn: 'root'
})
export class PosVisitService {

    constructor(private http: HttpClient) {}

    getVisits(): Observable<PosVisit[]> {
        return this.http.get<PosVisit[]>(`${server}/pos-visits`);
    }

    save(visit: PosVisit): Observable<PosVisit> {
        return this.http.post<PosVisit>(`${server}/pos-visits`, visit);
    }


}