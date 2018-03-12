import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A test', 'test description', 'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('A test', 'test description', 'https://images.agoramedia.com/everydayhealth/gcms/Foods-That-Help-or-Hurt-Anxiety-02-1440x810.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  clickRecipeWasSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
