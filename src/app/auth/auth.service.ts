import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthRequest} from './auth.request';
import {ApiResponse} from '../common/api.response';

//Constants
const AUTH_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/auth',
  END_POINTS: {
    REGISTER: '/register',
    LOGIN: '/login',
    VERIFY: '/verify'
  },
  STORAGE_KEY: 'accessToken'
} as const;

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `${AUTH_CONFIG.BASE_URL}${endpoint}`;
  }

  register(data: any): Observable<any> {
    return this.http.post(this.buildUrl(AUTH_CONFIG.END_POINTS.REGISTER), data);
  }

  login(data: AuthRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      this.buildUrl(AUTH_CONFIG.END_POINTS.LOGIN), data)
      .pipe(
      tap(result => {
        localStorage.setItem(AUTH_CONFIG.STORAGE_KEY, JSON.stringify(result.data.token));
      })
    );
  }


  isLoggedIn(){
    return localStorage.getItem(AUTH_CONFIG.STORAGE_KEY) !== null;
  }

  logout() {
    localStorage.clear();
  }

  getAccessToken(): string | null {
    return localStorage.getItem(AUTH_CONFIG.STORAGE_KEY);
  }
}
