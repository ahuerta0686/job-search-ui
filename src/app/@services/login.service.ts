import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ApiAuthService } from './api/auth.service';

@Injectable()
export class LoginService {

  constructor(
    private authApi: ApiAuthService,
  ) { }

  public init(): Observable<any> {
    return Observable.of(true);
  }

  public login(email: string, password: string): Observable<any> {
    return this.authApi.authenticate({ email, password });
  }
}
