import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  
  @Input()
  public highlightedProducts:Product[]

  constructor() {
    
   }

  ngOnInit() {
  }

}
