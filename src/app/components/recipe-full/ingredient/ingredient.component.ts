import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/recipe.model';
import { LocalService } from 'src/app/services/local-service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  private MEASURE = 'MEAS';
  measure: string = 'metric';
  amount: string = '';
  unit: string = '';

  @Input()
  ingredient!: Ingredient;

  constructor(private localService: LocalService) {
    this.measure =
      this.localService.getElement(this.MEASURE) === 'us' ? 'us' : 'metric';
  }

  ngOnInit() {
    this.amount = this.ingredient.measures[this.measure].amount;
    this.unit = this.ingredient.measures[this.measure].unitLong;
  }
}
