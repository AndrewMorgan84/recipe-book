import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] =  [
    new Recipe('Teriyaki pork meatballs','Meatballs in a teriyaki sauce','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/teriyaki-noodles-e167565.jpg?quality=90&webp=true&resize=375,341'),
    new Recipe('Stuffed Pasta Bake Bolognese','bolognese and stuffed pasta shells','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stuffed-pasta-bake-bolognese-6995b2b.jpg?quality=90&webp=true&resize=375,341'),
    new Recipe('Chorizo & pea risotto','easy midweek meal','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-pea-risotto-974507b.jpg?quality=90&webp=true&resize=375,341')
  ];

  constructor() { }

  ngOnInit() {
  }

}
