import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test', 'test description', 'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('A test 2', 'test description', 'https://images.agoramedia.com/everydayhealth/gcms/Foods-That-Help-or-Hurt-Anxiety-02-1440x810.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
