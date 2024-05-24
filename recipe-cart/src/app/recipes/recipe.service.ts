import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Carbonara',
      'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxcIk_QNcQWBC9VV-za2rJdGi4Dg-jBLmo4FCt7FeSw&s',
      [
        new Ingredient('Spaghetti', 400),
        new Ingredient('Eggs', 4),
        new Ingredient('Pancetta', 150),
        new Ingredient('Pecorino Romano cheese', 100),
        new Ingredient('Black pepper', 2),
        new Ingredient('Salt', 1),
      ]
    ),
    new Recipe(
      'Chicken Curry',
      'A flavorful chicken curry made with a mix of spices, tomatoes, and coconut milk.',
      'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
      [
        new Ingredient('Chicken breast', 500),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 3),
        new Ingredient('Ginger', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Coconut milk', 400),
        new Ingredient('Curry powder', 2),
        new Ingredient('Turmeric', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
      ]
    ),
    new Recipe(
      'Vegetable Stir-Fry',
      'A quick and easy vegetable stir-fry with a mix of colorful vegetables and a savory sauce.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lAEaJ1CaNsoGqws7YwPiHVuACaWPJaHcKJa9ID_NOA&s',
      [
        new Ingredient('Broccoli', 200),
        new Ingredient('Carrot', 2),
        new Ingredient('Bell pepper', 1),
        new Ingredient('Snap peas', 100),
        new Ingredient('Soy sauce', 3),
        new Ingredient('Sesame oil', 2),
        new Ingredient('Garlic', 2),
        new Ingredient('Ginger', 1),
        new Ingredient('Cornstarch', 1),
        new Ingredient('Water', 50),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    console.log(index);
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
