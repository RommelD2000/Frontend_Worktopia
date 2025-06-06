import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/employees',
  END_POINTS: {
    SAVE: '/save'
  },
  STORAGE_KEY: 'accessToken'
} as const;

@Injectable({
  providedIn: 'root'
})


export class EmployesService {

  constructor(private http: HttpClient) {}
   private buildUrl(endpoint: string): string {
    return `${AUTH_CONFIG.BASE_URL}${endpoint}`;
  }



  save(data: any): Observable<any> {
    console.log(data)
      return this.http.post(this.buildUrl(AUTH_CONFIG.END_POINTS.SAVE), data);
    }
 
}
