import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input()
  ingredient!: Ingredient;

  constructor() {}

  ngOnInit() {}
}
