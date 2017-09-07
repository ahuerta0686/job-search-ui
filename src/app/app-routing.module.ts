import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { AuthRequiredGuard } from './@guards/auth-required.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: []
  },
  {
    path: 'results/:zip/:query',
    component: ResultsComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthRequiredGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
