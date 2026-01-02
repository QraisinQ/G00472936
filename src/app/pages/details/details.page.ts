import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { RecipeModel } from 'src/app/models/recipe.model';
import { FetchService } from 'src/app/services/fetch-service';
import { RecipeFullComponent } from 'src/app/components/recipe-full/recipe-full.component';

@Component({
  selector: 'app-home',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RecipeFullComponent],
})
export class DetailsPage {
  id: string | null = null;
  recipe!: RecipeModel;

  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '0';
    this.fetchService.fetchFullRecipeById(Number(this.id)).subscribe({
      next: (data) => {
        this.recipe = data as RecipeModel;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
