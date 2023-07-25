
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const activateUsersFn: CanActivateFn = function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  return false;
};


