import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import { PhotographyComponent } from './components/photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    HomeComponent,
    ProductsComponent,
    PaintingsComponent,
    GraphicComponent,
    FurnituresComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
