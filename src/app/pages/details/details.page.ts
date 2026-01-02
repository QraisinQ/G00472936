import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { FetchService } from 'src/app/services/fetch-service';

@Component({
  selector: 'app-home',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class DetailsPage {
  id: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '0';
    this.fetchService.fetchFullRecipeById(Number(this.id)).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
