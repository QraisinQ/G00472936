import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.component.html',
  styleUrls: ['./recipe-full.component.scss'],
  imports: [IngredientComponent, IonButton, RouterModule, IonIcon],
})
export class RecipeFullComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;

  constructor() {
    addIcons({ heart });
  }

  ngOnInit() {}
}
