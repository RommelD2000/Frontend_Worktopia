import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiResponse} from '../common/api.response';
import {Observable, tap} from 'rxjs';

const TRAINING_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/trainings',
  END_POINTS: {
    SAVE: '/save',
    GET_ALL: '/all',
  }
} as const;


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }


  private buildUrl(endpoint: string): string {
    return `${TRAINING_CONFIG.BASE_URL}${endpoint}`;
  }

  getAll(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(
      this.buildUrl(TRAINING_CONFIG.END_POINTS.GET_ALL))
      .pipe(
        tap(
          result => console.log(result),
        )
      );
  }
}
