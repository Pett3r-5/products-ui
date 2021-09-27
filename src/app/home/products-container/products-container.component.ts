import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  
  @Input()
  public highlightedProducts:Product[]

  constructor() {
    
   }

  ngOnInit() {
  }

}
