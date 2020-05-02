import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {from, Observable} from 'rxjs';
import {PosVisit} from '../models/pos_visit.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {

    constructor(private storage: StorageService) {
    }

    async getAll(data: string) {
        return this.storage.read(data);
    }

    async getOne(table: string, field: string, value: any) {
        const data = await this.storage.read(table);
        return await data.find(item => item[field] == value);
    }

    async getPos(code: string, branchCode: string) {
        const pos = await this.storage.read('_pos');
        return await pos.find(item => item.code == code && item.branch_code == branchCode);
    }

    async getPosInventory(code: string, branchCode: string) {
        const inventory = await this.storage.read('_inventories');
        return await inventory.filter(item => item.code == code && item.branch_code == branchCode);
    }

    async updateOne(table: string, field: string, value: any, params: any) {
        const data = await this.storage.read(table);
        if(data) {
            data.map(item => {
                if(item[field] == value) {
                    Object.assign(item, { ...params });
                }
                return item;
            });
            await this.storage.save(table, data);
        }
    }

    orderField(field: string, order: string = 'asc') {
        return (a, b): number => {
            const first = (typeof a[field] === 'string') ? a[field].toUpperCase() : a[field];
            const second = (typeof b[field] === 'string') ? b[field].toUpperCase() : b[field];
            const comparison = (first > second) ? 1 : (first < second) ? -1 : 0;
            return ((order === 'desc') ? (comparison * -1) : comparison);
        }
    }

}