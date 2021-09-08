import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[headerScroll]'
})
export class HeaderScrollDirective {
    constructor(private elementRef: ElementRef){}

    @HostListener('onscroll') onScrollDown() {
        if(window.innerHeight > 50) {
            //window.scrollY
            this.elementRef.nativeElement.style.height = 50
            this.elementRef.nativeElement.style.backgroundColor = "blueviolet"
        } else {
            this.elementRef.nativeElement.style.height = 100
            this.elementRef.nativeElement.style.backgroundColor = "rgb(202, 168, 233)"
        }
        
    }
}