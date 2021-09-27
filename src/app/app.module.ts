import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsContainerComponent } from './home/products-container/products-container.component';
import { ProductItemComponent } from './home/products-container/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderScrollDirective } from './header/header-scroll.directive';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { FooterContentComponent } from './footer/footer-content/footer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsContainerComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HeaderScrollDirective,
    HomeBannerComponent,
    FooterContentComponent
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
