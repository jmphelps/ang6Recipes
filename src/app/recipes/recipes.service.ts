import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Tasty Schnitzel', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Big Ass Burger', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg', [
      new Ingredient('Meat', 2),
      new Ingredient('French Fries', 30)
    ]),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
