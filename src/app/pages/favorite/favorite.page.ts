import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { RecipeListComponent } from 'src/app/components/recipe-list/recipe-list.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { LocalService } from 'src/app/services/local-service';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';

@Component({
  selector: 'app-favorite',
  templateUrl: 'favorite.page.html',
  styleUrls: ['favorite.page.scss'],
  imports: [
    IonContent,
    IonButton,
    RecipeListComponent,
    RouterModule,
    AppHeaderComponent,
  ],
})
export class FavoritePage {
  private FAVORITE = 'FAV';
  favorite: RecipeModel[] = [];

  constructor(private localService: LocalService) {}

  ionViewWillEnter() {
    const strData = this.localService.getElement(this.FAVORITE) ?? '[]';
    this.favorite = JSON.parse(strData);
  }
}
