import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:4200/api/categories';

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  getTasks(categoryId: number): Observable<Task[]> {
    let url = `${this.taskUrl}/${categoryId}/`;
    return this.http.get<Task[]>(url, httpOptions).pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    );
  }

  addTask(newTask: Task): Observable<Task> {

    return this.http.post<Task>(this.taskUrl, newTask, httpOptions).pipe(
      catchError(this.handleError<Task>('addTask')));
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
