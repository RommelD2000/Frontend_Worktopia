import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from '../../common/api.response';
import { HttpClient } from '@angular/common/http';
import { Category } from './categories/category.model';
const CATEGORY_CONFIG = {
  BASE_URL: 'http://localhost:8081/api/category',
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
export class CategoryServiceService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8081/api/category/get_by_id';
private apiUr = 'http://localhost:8081/api/category/delete';
private apiU = 'http://localhost:8081/api/category/update';

 private buildUrl(endpoint: string): string {
    return `${CATEGORY_CONFIG.BASE_URL}${endpoint}`;
  }
  getAllCategories(): Observable<ApiResponse>{
      return this.http.get<ApiResponse>(
        this.buildUrl(CATEGORY_CONFIG.END_POINTS.GET_ALL))
        .pipe(
          tap(
            result => console.log(result),
          )
        );
    }

    updateCategory(id:number, categoryRequest:Category): Observable<ApiResponse>{
       console.log("controleur update",`${CATEGORY_CONFIG.BASE_URL}${CATEGORY_CONFIG.END_POINTS.EDIT}/${id}`)
        return this.http.put<ApiResponse>(`${CATEGORY_CONFIG.BASE_URL}${CATEGORY_CONFIG.END_POINTS.EDIT}/${id}`, categoryRequest);
      
    }
    
    

    createCategory(data: any): Observable<any>{
             console.log("controleur create",this.buildUrl(CATEGORY_CONFIG.END_POINTS.SAVE),"controleur dasfdsddf", data)

       return this.http.post<ApiResponse>(this.buildUrl(CATEGORY_CONFIG.END_POINTS.SAVE), data);
    }
     deleteCategory(id: any): Observable<ApiResponse> {
        
        const url = `${CATEGORY_CONFIG.BASE_URL}${CATEGORY_CONFIG.END_POINTS.DELETE}/${id}`;
        
        return this.http.delete<ApiResponse>(url);
      }
    
}
