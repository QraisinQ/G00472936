import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private store = localStorage;

  setElement(key: string, val: string) {
    this.store.setItem(key, val);
  }

  getElement(key: string) {
    return this.store.getItem(key);
  }
}
