import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedUser = localStorage.getItem('loggedUser')
  if(loggedUser === null) {
    router.navigateByUrl('/sign-in');
  }
  return loggedUser !== null;
};
