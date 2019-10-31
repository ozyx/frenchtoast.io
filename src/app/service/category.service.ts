import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'http://localhost:4200/api/categories';

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  getCategories(): Observable<Category[]> {
    const info = 'CategoryService.getCategories()';
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      tap(_ => this.logger.log(info)),
      catchError(this.handleError<Category[]>(info, []))
    );
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    const info = `CategoryService.getCategoryById(id: ${id})`;
    return this.http.get<Category>(url, httpOptions).pipe(
      tap(_ => this.logger.log(info)),
      catchError(this.handleError<Category>(info))
    );
  }

  addCategory(newCategory: Category): Observable<Category> {
    const info = 'addCategory()';
    return this.http.post<Category>(this.categoriesUrl, newCategory, httpOptions).pipe(
      tap(_ => this.logger.log(info)),
      catchError(this.handleError<Category>(info))
    );
  }

  deleteCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    const info = `deleteCategory(id: ${id})`;
    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => this.logger.log(info)),
      catchError(this.handleError<Category>(info))
    );
  }

  updateCategory(category: Category) {
    const url = `${this.categoriesUrl}/${category.id}`;
    const info = `updateCategory(${category.id})`;
    return this.http.put<Category>(url, category, httpOptions).pipe(
      tap(_ => this.logger.log(info)),
      catchError(this.handleError<Category>(info))
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

      // send the error to remote logging infrastructure
      this.logger.error(error);

      this.logger.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
