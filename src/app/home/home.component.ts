import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../navbar/navbar.component';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [ ProductsComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
