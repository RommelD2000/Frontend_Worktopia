
import {ActivatedRouteSnapshot, CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('accessToken');

  if (!token){
    router.navigate(['/login']).then(() => {});
  }

  // @ts-ignore
  let jwt = "";
  if (token != null) {
    jwt = JSON.parse(token);
  }
  const payloadBase64 =  jwt.split('.')[1];
  const payloadJson = atob(payloadBase64);
  const payload = JSON.parse(payloadJson);

  const userRole = payload.role || payload.authorities[0];

  const expectedRole = route.data['expectedRole']
  if (userRole === expectedRole){
    return true
  }else {
    router.navigate(['/login']).then(() => {}); //or navigate to unauthorized
  }

  return false;
};
