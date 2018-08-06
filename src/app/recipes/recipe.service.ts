import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is simply a test',
      'https://d298hcpblme28l.cloudfront.net/images/products/91a3b67ea2ed7418159d99762a54cad4_resize.png',
        [
        new Ingredient('ingredientOne', 1),
        new Ingredient('ingredientTwo', 2)
        ]
    ),
    new Recipe('Another test recipe',
      'This is simply a test',
      'https://d298hcpblme28l.cloudfront.net/images/products/91a3b67ea2ed7418159d99762a54cad4_resize.png',
      [
        new Ingredient('ingredientOne', 1),
        new Ingredient('ingredientTwo', 2)
      ]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  constructor(private shoppingListSercice: ShoppingListService) {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSercice.addIngredients(ingredients);
  }
}
