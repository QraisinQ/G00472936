import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.component.html',
  styleUrls: ['./recipe-full.component.scss'],
})
export class RecipeFullComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;

  constructor() {}

  ngOnInit() {}
}
