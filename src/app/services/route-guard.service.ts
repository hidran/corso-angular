
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const activateUsersFn: CanActivateFn = function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  const auth: AuthService = inject(AuthService);
  if (auth.isUserLogin()) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['login']);
    return false;
  }
};


