import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IonButton, IonItemDivider } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  imports: [IonButton, IonItemDivider, RouterModule],
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;

  constructor() {}

  ngOnInit() {}
}
