import { JwtHelperService } from "@auth0/angular-jwt";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "../local-storage.service";
import { switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  helper = new JwtHelperService();
  isWaitingToken = false;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.addToken(request)).pipe(
      switchMap((clonedReq) => {
        request = clonedReq;
        return next.handle(request);
      })
    );
  }

  private async addToken(request: HttpRequest<any>) {
    let headers;

    headers = {
      ...headers,
      "Content-Type": "application/json",
      accept: "application/vnd.github.v3+json",
    };

    return request.clone({
      setHeaders: headers,
    });
  }

}
