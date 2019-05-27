export interface Recipe {
  id?: string;
  nameRecipe: string;
  recipe: string;
  username: string;
  email: string;
  imageUrl: string;
  ingredients: {
    name: string,
    amount: number;
    measure: string;
  };
}
