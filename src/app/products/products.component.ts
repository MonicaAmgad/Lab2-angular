import { Component } from '@angular/core';
import { ProductInterface } from '../product-interface'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : ProductInterface[] = [
    {  name: 'e.l.f foundation', price: 1300 , image: "/1.jpeg" ,onSale: true },
    {  name: 'Huda beauty loose Powder', price: 2200 , image: "/2.jpeg" ,onSale: false },
    {  name: 'Rare beauty blusher', price: 2500 , image:  "/3.jpeg",onSale: true },
    {  name: 'Mac lipstick', price: 1400 , image:  "/4.jpeg",onSale: false },
    {  name: 'charlotte tilbury highlighter', price: 3500 , image:  "/5.jpeg",onSale: true },
    
  ];

}
