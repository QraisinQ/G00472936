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

  private getRecipesByIngredientUrl(ingredients: string[]) {
    const ingrParam = `ingredients=${ingredients}`;
    const keyParam = 'apiKey=' + this.k;

    return `${this.url}/recipes/findByIngredients?${keyParam}&${ingrParam}`;
  }

  fetchRecipes(data: string[]): Observable<any> {
    const url = this.getRecipesByIngredientUrl(data);

    return this.http.get(url);
  }

  fetchFullRecipeById(id: number) {
    return this.http.get(
      `${this.url}/recipes/${id}/information?apiKey=${this.k}`
    );
  }
}
