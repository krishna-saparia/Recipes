import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipesService ){ }

  ngOnInit() {
    // will be set here
    this.recipes = this.recipeService.getAllRecipes();
    console.log('LOADED RECIPES');
    console.log(this.recipes);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipeService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
