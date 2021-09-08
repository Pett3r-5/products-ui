import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ProductItemComponent } from './home/home-container/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderScrollDirective } from './header/header-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeContainerComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HeaderScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [HeaderScrollDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
