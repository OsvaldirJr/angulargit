import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/shared/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private baseService: BaseService,
    private http: HttpClient) {

  }

  getAllPublicRepos(username:string) : Observable<Repository[]>{
    return this.baseService.get(`orgs/${username}/repos`);
  }
}
