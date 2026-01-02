import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IonButton, IonItemDivider } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  imports: [IonButton, IonItemDivider],
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;

  constructor() {}

  ngOnInit() {}
}
