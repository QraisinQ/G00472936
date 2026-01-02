import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonInput, IonItem, IonButton, FormsModule],
})
export class SearchComponent implements OnInit {
  userInput: string = '';

  constructor() {}

  ngOnInit() {}

  startSearch() {
    console.log(this.userInput);
  }
}
