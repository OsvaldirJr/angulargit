import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseService } from '../services/base.service';
import {RepoService} from '../services/repos.service';
describe('RepoService', () => {
    const expectedSubs: any[] =
    [{ id: 1, login: 'alvarow' }, { id: 2, name: 'MadGeometer' }];
  
    let service: RepoService;
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let baseService: BaseService = new BaseService(httpClientSpy);
    httpClientSpy.get.and.returnValue(of((expectedSubs)));

    beforeEach(() => { service = new RepoService(baseService, httpClientSpy); });
  
    it('#getAllPublicRepos should return some value', () => {
      expect(service.getSubscribersRepos("adplabs","JQL")).not.toBeNull();
    });
  
    it('#getAllPublicRepos should return value from observable',
      (done: DoneFn) => {
      service.getSubscribersRepos("adplabs","JQL").subscribe(value => {
        expect(value).not.toBeNull();
        done();
      });
    });
  });