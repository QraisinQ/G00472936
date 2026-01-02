import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private k = '70759a4f7911402abcc53d3c51d3b759';
  private url = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  fetchRecipes(data: string[]): Observable<any> {
    return this.http.get(this.url);
  }
}
