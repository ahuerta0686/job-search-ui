import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiAuthService } from '../@services/api/auth.service';

@Injectable()
export class AuthRequiredGuard implements CanActivate {
  constructor(
    private router: Router,
    private authApi: ApiAuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authApi.verify();
  }
}
