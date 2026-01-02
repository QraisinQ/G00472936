import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { SearchComponent } from '../../components/search/search.component';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SearchComponent,
    RecipeListComponent,
  ],
})
export class HomePage {
  constructor() {}
}
