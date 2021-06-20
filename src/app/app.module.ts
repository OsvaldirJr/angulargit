import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule} from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
