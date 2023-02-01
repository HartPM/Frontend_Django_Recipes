export interface Meal {
    id: number;
    strMeal: string;
    strArea: string;
    strMealThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strInstructions: string;
    created: Date;
  }

export type RecipesProps = {
    recipes?: Meal[];
    getMyRecipes: () => Promise<void>;
  }

export type SingleRecipeProps = {
  recipe: Meal;
  getMyRecipes: () => Promise<void>;
}

export type EditProps = {
  recipe: Meal;
  ingredients: string[];
  hideForm: () => void;
}

export type initialFormValues = {
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  ingredients: string[];
  strInstructions: string;
}