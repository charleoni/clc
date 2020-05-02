import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) {}

    async save(name: string, value: any) {
        return await this.storage.set(name, value);
    }

    async read(name: string) {
        return await this.storage.get(name);
    }

    async destroy(name: string) {
        return await this.storage.remove(name);
    }

    async clear() {
        return await this.storage.clear();
    }

}