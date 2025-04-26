import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './navbar/navbar.component';
import {CategoriesComponent }from './categories/categories.component';
import FooterComponent from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [ ProductsComponent, NavBarComponent, CategoriesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
}
