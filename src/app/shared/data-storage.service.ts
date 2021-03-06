import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators'

@Injectable()
export class DataStorageService {
private dataBaseUrl = 'https://ng-course-recipe-book-63cd9.firebaseio.com/recipes.json';

constructor(
  private http: HttpClient,
  private recipeService: RecipeService
){}

storeRecipes(){
  const recipes = this.recipeService.getRecipes();

  this.http.put(this.dataBaseUrl, recipes)
  .subscribe(response => {
    console.log(response);
  });
}

fetchRecipes(){
  return this.http.get<Recipe[]>(this.dataBaseUrl)
  .pipe(map(recipes => {
    return recipes.map(recipe => {
      return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
      };
    });
  }),tap(recipes => {
    this.recipeService.setRecipes(recipes);
  })
  )
}

}
