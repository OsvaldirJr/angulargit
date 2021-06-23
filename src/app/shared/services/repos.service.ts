import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import {Subscriber} from 'src/app/shared/models/subscriber.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {


  constructor(private baseService: BaseService,
    private http: HttpClient) {

  }

  getSubscribersRepos(org:string, repo: string) : Observable<Subscriber[]>{
    return this.baseService.get(`repos/${org}/${repo}/subscribers`);
  }
}