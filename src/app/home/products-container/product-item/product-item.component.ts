import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input("product")
  public product: Product

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  onClick() {
    console.log("here")
    
    this.router.navigate(['/product/', this.product.id])
  }

}
