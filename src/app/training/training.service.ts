import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiResponse} from '../common/api.response';
import {Observable, tap} from 'rxjs';
import { TrainingRequest } from './training.request';
import { TrainingDTO } from './TrainingDTO';

const TRAINING_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/trainings',
  END_POINTS: {
    SAVE: '/save',
    GET_ALL: '/all',
    EDIT: '/update',
    DELETE: '/delete',
    GET_BY_ID: '/get_by_id'
  }
} as const;


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }
// private apiUrl = 'http://localhost:8081/api/trainings/get_by_id';
// private apiUr = 'http://localhost:8081/api/trainings/delete';
// private apiU = 'http://localhost:8081/api/trainings/update';

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

  addTraining(data: any): Observable<any> {
    console.log(data)
      return this.http.post<ApiResponse>(this.buildUrl(TRAINING_CONFIG.END_POINTS.SAVE), data);
  }

public editTraining(id:number, trainingRequest:TrainingRequest):Observable<ApiResponse>{

  console.log("controleur update",`${TRAINING_CONFIG.BASE_URL}${TRAINING_CONFIG.END_POINTS.EDIT}/${id}`)
    return this.http.put<ApiResponse>(`${TRAINING_CONFIG.BASE_URL}${TRAINING_CONFIG.END_POINTS.EDIT}/${id}`, trainingRequest);
  }

   deleteTraining(id: any): Observable<ApiResponse> {
    
    const url = `${TRAINING_CONFIG.BASE_URL}${TRAINING_CONFIG.END_POINTS.DELETE}/${id}`;
    
    return this.http.delete<ApiResponse>(url);
  }

 
  getTrainingbyId(id: number): Observable<TrainingDTO> {
    return this.http.get<TrainingDTO>(`${TRAINING_CONFIG.BASE_URL}${TRAINING_CONFIG.END_POINTS.GET_BY_ID}/${id}`);
  }


  
}
