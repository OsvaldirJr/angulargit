import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';

const routes: Routes = [ { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
{
  path: 'dashboard',
  component: PageWrapperComponent,
    children: [
      {
        path: 'home',

        component: HomeComponent,
      },]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
