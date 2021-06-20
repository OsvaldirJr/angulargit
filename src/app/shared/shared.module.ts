import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// services
import { NavService } from "./services/nav.service";
import { BaseService } from "./services/base.service";

// Directives
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { LoaderComponent } from './components/loader/loader.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { PhonePipe } from './utils/pipes/phone-pipe/phone.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    ContentLayoutComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    ToggleFullscreenDirective,
    LoaderComponent,
    PhonePipe,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ChartsModule,
  ],
  exports: [
    FeatherIconsComponent,
    LoaderComponent,
    HeaderComponent,
    PhonePipe,
  ],
  providers: [
    NavService,
    BaseService,
    NgbActiveModal
  ]
})
export class SharedModule { }

