import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { ApiAuthService } from './@services/api/auth.service';
import { ApiSearchesService } from './@services/api/searches.service';
import { SearchesFactory } from './@services/factories/searches.factory';
import { ApiSnippetService } from './@services/api/snippet.service';
import { SnippetFactory } from './@services/factories/snippet.factory';

import { SearchService } from './@services/search.service';
import { ResultsService } from './@services/results.service';
import { LoginService } from './@services/login.service';
import { AdminService } from './@services/admin.service';

import { AuthRequiredGuard } from './@guards/auth-required.guard';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

if (environment.production) { enableProdMode(); }

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },

    ApiAuthService,
    ApiSearchesService,
    SearchesFactory,
    ApiSnippetService,
    SnippetFactory,

    SearchService,
    ResultsService,
    LoginService,
    AdminService,

    AuthRequiredGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
