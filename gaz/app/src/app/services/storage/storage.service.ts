import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async setData(name: string, value: any) {
    return await this.storage.set(name, value);
  }

  async getData(name: string) {
    return await this.storage.get(name);
  }

  async destroyData(name: string) {
    return await this.storage.remove(name);
  }

  async clearData() {
    return await this.storage.clear();
  }

}
