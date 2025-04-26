import { Component } from '@angular/core';
import { CategoryInterface } from '../category-interface';  
@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: CategoryInterface[] = [
    {image: "/foundations.jpeg", price: [1000,2000,3000], name: "Foundations"},
    {image: "/loose.jpeg", price: [1000,2000,3000], name: "Loose Powders"},
    {image: "/blushers.jpeg", price: [1000,2000,3000], name: "Blushers"},
    {image: "/lipsticks.jpeg", price: [1000,2000,3000], name: "Lipsticks"},
    {image: "highlighters.jpeg", price: [1000,2000,3000], name: "Highlighters"},
    ]}
