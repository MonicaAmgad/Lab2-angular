import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './navbar/navbar.component';
import {CategoriesComponent }from './categories/categories.component';
import FooterComponent from './footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ NavBarComponent, FooterComponent, RouterOutlet, ProductsComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  imgURL = 'logo.png'; 
}
