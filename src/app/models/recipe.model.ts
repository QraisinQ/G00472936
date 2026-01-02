interface Instruction {
  steps: [{ number: number; step: string }];
}

export interface Ingredient {
  image: string;
  original: string;
  measures: any;
}

export interface RecipeModel {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}
