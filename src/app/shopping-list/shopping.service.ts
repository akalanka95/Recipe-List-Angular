import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService {
  ingredientsChange = new Subject<Ingredient[]>();
  startingEditChange = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredientsFromIndex (index: number) {
    return this.ingredients[index];
  }
  addIngredients(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
  updateIngredients(index: number, ingredients: Ingredient) {
    this.ingredients[index] = ingredients;
    this.ingredientsChange.next(this.ingredients.slice());
  }
  deleteIngredients(index: number) {
    this.ingredients.splice(index , 1);
    console.log(this.ingredients);
    this.ingredientsChange.next(this.ingredients.slice());

  }
   addIngredientsArray(ingredients: Ingredient[]) {
    /*for (let ingredients of ingredients) {
      this.addIngredients(ingredientsn);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
   }
}
