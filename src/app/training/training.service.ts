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
    EDIT: '/edit',
    DELETE: 'delete',
    GET_BY_ID: 'getbyId'
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

  addTraining(data: any): Observable<any> {
    console.log(data)
      return this.http.post(this.buildUrl(TRAINING_CONFIG.END_POINTS.SAVE), data);
  }

public editTraining(id:number, trainingRequest:TrainingRequest):Observable<TrainingRequest>{
    return this.http.put<TrainingRequest>(`${TRAINING_CONFIG.END_POINTS.EDIT}/${id}`, trainingRequest);
  }


  public getTrainingbyId(id:any):Observable<TrainingDTO>{
    
    return this.http.get<TrainingDTO>(`${TRAINING_CONFIG.END_POINTS.GET_BY_ID}/${id}`);
  }


  
  public deleteTraining(id:String):Observable<TrainingRequest>{
    
    return this.http.delete<TrainingRequest>(`${TRAINING_CONFIG.END_POINTS.DELETE}/${id}`);
  }

  
}
