import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tARCeWApgCQ_8LgV17vUo8xwsS1GX7-0cXUbZYca9rU4bjWTRg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
