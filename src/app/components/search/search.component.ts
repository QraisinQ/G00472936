import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { FetchService } from 'src/app/services/fetch-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonInput, IonItem, IonButton, FormsModule],
})
export class SearchComponent implements OnInit {
  userInput: string = '';

  constructor(private fetchService: FetchService) {}

  ngOnInit() {}

  startSearch() {
    const ingredients = this.userInput.split(',');

    this.fetchService.fetchRecipes(ingredients).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('Error!!!');
        console.error(err);
      },
    });
  }
}
