import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule, CarouselModule, ChartsModule } from 'angular-bootstrap-md';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { RepoService } from '../../shared/services/repos.service';
import { UserService } from '../../shared/services/user.service';

import { ReposComponent } from './repos.component';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  const expectedRepos: any[] =
    [{ id: 1, name: 'JQL' }, { id: 2, name: 'unicorn' }];
  
    let userHttpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let userbaseService: BaseService = new BaseService(userHttpClientSpy);
    userHttpClientSpy.get.and.returnValue(of((expectedRepos)));

    const expectedSubs: any[] =
    [{ id: 1, login: 'alvarow' }, { id: 2, name: 'MadGeometer' }];

    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let reposBaseService: BaseService = new BaseService(userHttpClientSpy);
    httpClientSpy.get.and.returnValue(of((expectedSubs)));
    

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot(),
        CarouselModule,
        ChartsModule,
        NgxPaginationModule,
        NgMultiSelectDropDownModule.forRoot()
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    let userService = new UserService(userbaseService, httpClientSpy);
    let reposService = new RepoService(reposBaseService, httpClientSpy);
    component = new ReposComponent(null,userService,reposService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addSubscriberItem Should emit an event to change subscribers number', () => {
    spyOn(component.subscriberEvent, 'emit');
    component.addSubscriberItem(5);
    expect(component.subscriberEvent.emit).toHaveBeenCalledWith(5);
  });

  it('addProjectItem Should emit an event to change selected projects number', () => {
    spyOn(component.projectEvent, 'emit');
    component.addProjectItem(16);
    expect(component.projectEvent.emit).toHaveBeenCalledWith(16);
  });

  it('number of repositories should not to be null when getReposSubscribers was called', () => {
    component.getReposSubscribers("adplabs");
    expect(component.reposCount).not.toBeNull();
  });
  
  it('selected repositories should not to be null when getReposSubscribers was called', () => {
    component.getReposSubscribers("adplabs");
    expect(component.reposSelected).not.toBeNull();
  });

  it('number of repositories should not to be zero when getReposSubscribers was called', () => {
    component.getReposSubscribers("adplabs");
    expect(component.reposCount).not.toBe(0);
  });
  it('selected repositories should not to be empty when getReposSubscribers was called', () => {
    component.getReposSubscribers("adplabs");
    expect(component.reposSelected).not.toBe([]);
  });
});
