import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() { }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
