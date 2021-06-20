import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public showLoader = false;

  constructor(
    private baseService: BaseService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient) { }

  refreshToken(email) {
    const auth = null;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${(auth && auth.refresh_token) ? auth.refresh_token : ''}`,
    });

    return this.http.get(
      `${environment.baseUrl}/Backoffice/refresh-token?email=${email}`,
      { headers })
      .pipe(
        map(response => {
          const authenticatedModel = response;
          //here will the code to update token
          return response;
        })
      );
  }

  login(email, password) {
    let loginModel = { email, password };
    //here will the code to login
  }

  logout() {
    this.removeLocalStorage();
    this.router.navigateByUrl('/login');
  }

  removeLocalStorage() {
    localStorage.clear()
  }

  public isTokenExpired(tokenExpirationDate: Date): boolean {
    const now = new Date();
    const expiration = new Date(tokenExpirationDate)
    return now > expiration;
  }
}
