import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Task } from '../model/task'
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  add(category: Category): Observable<Category> {
    if (!category) { return; }
    return this.http.post<Category>(this.categoriesUrl, category, this.httpOptions).pipe(
      catchError(this.handleError<Category>('add'))
    );
  }

  addTask(categoryId: number, task: Task): Observable<Task> {
    const url = `${this.categoriesUrl}/${categoryId}/tasks`;
    if (!task) { return; }
    return this.http.post<Task>(url, task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>('getCategoryById'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      this.logger.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
