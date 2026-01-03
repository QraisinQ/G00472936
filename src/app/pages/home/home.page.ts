import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SearchComponent } from '../../components/search/search.component';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    SearchComponent,
    RecipeListComponent,
    AppHeaderComponent,
  ],
})
export class HomePage {
  recipes: RecipeModel[] = [];
  constructor() {}

  recieveRecieps(recipes: RecipeModel[]) {
    this.recipes = recipes;
  }
}
