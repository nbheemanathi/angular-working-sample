import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] =  [
    new Recipe('A test Recipe','A simple test recipe','https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}
