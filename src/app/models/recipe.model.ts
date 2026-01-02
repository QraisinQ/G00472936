interface Instruction {
  steps: [{ number: number; step: string }];
}

export interface RecipeModel {
  id: number;
  title: string;
  image: string;
  extendedIngredients: [
    {
      image: string;
      original: string;
      measures: any;
    }
  ];
  analyzedInstructions: Instruction[];
}
