import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from '../../common/api.response';

const AUTH_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/employees',
  END_POINTS: {
    SAVE: '/save',
    GET_ALL: '/all',
    DELETE: '/detele'
  },
  STORAGE_KEY: 'accessToken'
} as const;

@Injectable({
  providedIn: 'root'
})


export class EmployesService {
  deleteEmploye(id: string) {
    throw new Error('Method not implemented.');
  }
  apiUrl: any;

  constructor(private http: HttpClient) {}
   private buildUrl(endpoint: string): string {
    return `${AUTH_CONFIG.BASE_URL}${endpoint}`;
  }



  save(data: any): Observable<any> {
    console.log(data)
      return this.http.post(this.buildUrl(AUTH_CONFIG.END_POINTS.SAVE), data);
    }



     getAll(): Observable<ApiResponse>{
       console.log("b")
      console.log(AUTH_CONFIG.END_POINTS.GET_ALL)

      return this.http.get<ApiResponse>(
        
      
      this.buildUrl(AUTH_CONFIG.END_POINTS.GET_ALL))
      .pipe(
        tap(
          result => console.log(result),
        )
      );
  }

 deleteTraining(id: any): Observable<ApiResponse> {
     
     const url = `${AUTH_CONFIG.BASE_URL}${AUTH_CONFIG.END_POINTS.DELETE}/${id}`;
     
     return this.http.delete<ApiResponse>(url);
   }

 
}
