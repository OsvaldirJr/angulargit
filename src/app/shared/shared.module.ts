import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// services
import { NavService } from "./services/nav.service";
import { BaseService } from "./services/base.service";

// Directives
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { LoaderComponent } from './components/loader/loader.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { PhonePipe } from './utils/pipes/phone-pipe/phone.pipe';

@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    LoaderComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ChartsModule,
  ],
  exports: [
    LoaderComponent,
    PhonePipe,
  ],
  providers: [
    NavService,
    BaseService,
    NgbActiveModal
  ]
})
export class SharedModule { }

