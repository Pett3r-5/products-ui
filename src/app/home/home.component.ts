import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public highlightedProducts:Product[] = []

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {
    
   }

  ngOnInit() {
    this.productService.getHighlightedProductsMocked().subscribe((products:Product[])=>{
      console.log(products)
      this.highlightedProducts = []
      this.cdr.detectChanges()
      this.highlightedProducts = products.map(e=>e)
      this.cdr.detectChanges()
    })
  }

}
