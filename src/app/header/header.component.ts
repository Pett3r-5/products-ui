import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {
   }

   @HostListener('window:scroll', ['$event']) onscrollEvent(){
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')
    if(window.pageYOffset > 500) {
      header.style.height = '50px'
      header.style.backgroundColor = "rgb(202, 168, 233)"
      header.style.transition="height 100ms linear"
      
      logo.style.margin= "0px"
      logo.style.width= "40px"
      logo.style.height= "40px"
      logo.style.transition= "height 100ms linear"
    } else {
      header.style.height = '100px'
      header.style.backgroundColor = "blueviolet"
      header.style.transition= "height width 100ms linear"

      logo.style.margin= "10px"
      logo.style.width= "80px"
      logo.style.height= "80px"
      logo.style.transition= "height width 100ms linear"
      
    }
    this.cdr.detectChanges()
   }

  ngOnInit() {
  }

}
