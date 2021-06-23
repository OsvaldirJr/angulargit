import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseService } from '../services/base.service';
import {UserService} from '../services/user.service';
describe('UserService', () => {
    const expectedRepos: any[] =
    [{ id: 1, name: 'JQL' }, { id: 2, name: 'unicorn' }];
  
    let service: UserService;
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let baseService: BaseService = new BaseService(httpClientSpy);
    httpClientSpy.get.and.returnValue(of((expectedRepos)));

    beforeEach(() => { service = new UserService(baseService, httpClientSpy); });
  
    it('#getAllPublicRepos should return some value', () => {
      expect(service.getAllPublicRepos("adplabs")).not.toBeNull();
    });
  
    it('#getAllPublicRepos should return value from observable',
      (done: DoneFn) => {
      service.getAllPublicRepos("adplabs").subscribe(value => {
        expect(value).not.toBeNull();
        done();
      });
    });
  });