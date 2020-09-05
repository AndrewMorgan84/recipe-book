import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =  [
    new Recipe('Teriyaki pork meatballs','Meatballs in a teriyaki sauce','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/teriyaki-noodles-e167565.jpg?quality=90&webp=true&resize=375,341'),
    new Recipe('Stuffed Pasta Bake Bolognese','bolognese and stuffed pasta shells','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stuffed-pasta-bake-bolognese-6995b2b.jpg?quality=90&webp=true&resize=375,341'),
    new Recipe('Chorizo & pea risotto','easy midweek meal','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-pea-risotto-974507b.jpg?quality=90&webp=true&resize=375,341')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
