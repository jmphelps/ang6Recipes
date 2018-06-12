import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipesService) {

  }
  ngOnInit() {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
