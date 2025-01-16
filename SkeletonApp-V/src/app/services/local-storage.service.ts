import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
