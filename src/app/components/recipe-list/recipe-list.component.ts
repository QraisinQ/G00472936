import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  imports: [RecipeComponent],
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipeList!: RecipeModel[];

  constructor() {}

  ngOnInit() {}
}
