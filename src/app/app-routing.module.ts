import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { FurnituresComponent } from './components/furnitures/furnitures.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent,
    children: [
      { path: 'paintings', component: PaintingsComponent },
      { path: 'graphic_design', component: GraphicComponent },
      { path: 'photography', component: PhotographyComponent },
      { path: 'furnitures', component: FurnituresComponent }
    ]
  },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
