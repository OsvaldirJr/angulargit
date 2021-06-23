import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FeatherIconsComponent } from './shared/components/feather-icons/feather-icons.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from "./shared/services/auth/auth.interceptor";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { CarouselModule, ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReposComponent } from './pages/repos/repos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    ReposComponent,
    HeaderComponent,
    FeatherIconsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    CarouselModule,
    SharedModule,
    NgxDatatableModule,
    ChartsModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    FeatherIconsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
