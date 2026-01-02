import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class DetailsPage {
  constructor() {}
}
