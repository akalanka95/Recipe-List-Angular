import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test', 'test description', 'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('A test', 'test description', 'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')
  ];
  constructor() { }

  ngOnInit() {
  }

}
