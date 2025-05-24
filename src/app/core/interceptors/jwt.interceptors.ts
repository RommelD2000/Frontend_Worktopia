import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from '../../auth/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getAccessToken();
    let jwt = "";
    if (token != null) {
      jwt = JSON.parse(token);
    }

    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${jwt}` }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
