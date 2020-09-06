import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] =  [
    new Recipe(
      'Teriyaki pork meatballs',
      'Meatballs in a teriyaki sauce',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/teriyaki-noodles-e167565.jpg?quality=90&webp=true&resize=375,341',
      [
        new Ingredient('pork meatball', 2),
        new Ingredient('Teriyaki sauce', 1)
      ]),
    new Recipe(
      'Stuffed Pasta Bake Bolognese',
      'bolognese and stuffed pasta shells',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stuffed-pasta-bake-bolognese-6995b2b.jpg?quality=90&webp=true&resize=375,341',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Bolognese sauce', 1)
      ]),
    new Recipe(
      'Chorizo & pea risotto',
      'easy midweek meal',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-pea-risotto-974507b.jpg?quality=90&webp=true&resize=375,341',
      [
        new Ingredient('Peas',1),
        new Ingredient('Chorizo sausage', 1)
      ])
  ];

  constructor(
    private ShoppingListService: ShoppingListService
  ){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.ShoppingListService.addIngredients(ingredients);
  }

}
