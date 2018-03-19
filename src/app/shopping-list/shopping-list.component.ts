import {Component, OnDestroy, OnInit} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients =  this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  onEditItem(index: number){
    this.shoppingService.startingEditChange.next(index);
  }

}
