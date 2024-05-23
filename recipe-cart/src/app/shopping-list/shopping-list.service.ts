import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    IngredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tometoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  setIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //     this.setIngredients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
