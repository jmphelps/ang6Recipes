import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
