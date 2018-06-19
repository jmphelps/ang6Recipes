import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: Recipe;

 ngOnInit() {

 }
 constructor(private recipeService: RecipesService) { }

 onAddToShoppingList() {
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
 }
}
