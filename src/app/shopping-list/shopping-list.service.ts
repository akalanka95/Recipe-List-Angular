import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingrdients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('mango', 5)
  ];
  getIngredients() {
    return this.ingrdients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingrdients.push(ingredient);
    this.ingredientsChanged.emit(this.ingrdients.slice());
  }
}
