import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { FormsModule }   from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
