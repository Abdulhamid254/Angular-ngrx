import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  set(Key: string, data: unknown): void {
    try {
      localStorage.setItem(Key, JSON.stringify(data))
    } catch  (e) {
      console.error('Error saving to local storage', e)
    }
  }

 get(Key: string): unknown {
  try {
    const localStorageItem = localStorage.getItem(Key)
    return localStorageItem ? JSON.parse(localStorageItem) : null
  } catch (e) {
    console.error('Error getting local storage', e)
    return null
  }
 }
}
