import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  /*recipeSelected = new EventEmitter<Recipe>();*/
  constructor(private shoppingService: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 20),
        new Ingredient('Tomato', 10),
      ]),
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Burger', 5),
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }
  getRecipes(index: number) {
    return this.recipes[index];
  }
  addIngredientsToList(ingredientsA: Ingredient[]) {
      this.shoppingService.addIngredientsArray(ingredientsA);
  }


}
