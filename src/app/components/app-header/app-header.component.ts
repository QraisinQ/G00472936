import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle],
})
export class AppHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
