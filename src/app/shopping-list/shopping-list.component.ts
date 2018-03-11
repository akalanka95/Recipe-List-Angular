import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrdients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('mango', 5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
