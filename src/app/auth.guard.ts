import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  if (inject(UserService).isLoggedIn) return true;
  return inject(Router).parseUrl('/login');
};
