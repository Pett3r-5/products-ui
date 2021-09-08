import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public css  = {headerChange: 'header-top', logoChange:'logo-top' } 

  constructor(private cdr: ChangeDetectorRef) {
   }

   @HostListener('window:scroll', ['$event']) onscrollEvent(){
    if(window.pageYOffset > 500) {
      this.css.headerChange = 'header-small'
      this.css.logoChange = 'logo-small'
    } else {
      this.css.headerChange = 'header-top'
      this.css.logoChange = 'logo-top'
      
    }
    this.cdr.detectChanges()
   }

  ngOnInit() {
  }

}
