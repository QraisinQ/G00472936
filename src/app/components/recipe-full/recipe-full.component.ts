import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { LocalService } from 'src/app/services/local-service';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.component.html',
  styleUrls: ['./recipe-full.component.scss'],
  imports: [IngredientComponent, IonButton, RouterModule, IonIcon],
})
export class RecipeFullComponent implements OnInit {
  private favoriteList: RecipeModel[];
  private FAVORITE = 'FAV';

  @Input()
  recipe!: RecipeModel;

  constructor(private localService: LocalService) {
    addIcons({ heart });
    const strData = this.localService.getElement(this.FAVORITE) ?? '[]';
    this.favoriteList = JSON.parse(strData);
  }

  ngOnInit() {}

  isFavorite(id: number) {
    return this.favoriteList.some((r) => r.id === id);
  }

  addToFavorite() {
    if (this.isFavorite(this.recipe.id)) {
      this.favoriteList = this.favoriteList.filter(
        (r) => r.id !== this.recipe.id
      );
    } else {
      this.favoriteList.push(this.recipe);
    }

    this.localService.setElement(
      this.FAVORITE,
      JSON.stringify(this.favoriteList)
    );
  }
}
