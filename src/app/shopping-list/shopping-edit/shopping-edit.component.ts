import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output, OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  /*@ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;*/

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editIngredients: Ingredient;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startingEditChange
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editIndex = index;
          this.editIngredients = this.shoppingService.getIngredientsFromIndex(index);
          this.slForm.setValue({
            name: this.editIngredients.name,
            amount: this.editIngredients.amount
          });
        }
      );
  }

  onAddItem(form: NgForm) {
/*    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;*/
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredients(this.editIndex, newIngredient);
    }else {
      this.shoppingService.addIngredients(newIngredient);
      }
      this.editMode = false;
      this.slForm.reset();
    }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
      this.shoppingService.deleteIngredients(this.editIndex);
      this.onClear();
  }
}
