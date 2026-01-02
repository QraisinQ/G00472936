import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IngredientComponent } from './ingredient/ingredient.component';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.component.html',
  styleUrls: ['./recipe-full.component.scss'],
  imports: [IngredientComponent],
})
export class RecipeFullComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;

  constructor() {}

  ngOnInit() {}
}
