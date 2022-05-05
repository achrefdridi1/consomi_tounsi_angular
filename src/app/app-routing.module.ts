import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayonComponent } from './rayon/rayon.component';
import { SerachStockComponent } from './serach-stock/serach-stock.component';

import { SerachComponent } from './serach/serach.component';
import { StockComponent } from './stock/stock.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"",redirectTo:"rayon",pathMatch:"full"},
  {path:"addRayon",component:RayonComponent},
  {path:"serach",component:SerachComponent},
  {path:"addStock",component:StockComponent},
  {path:"serach-stock",component:SerachStockComponent},
  {path:"update/:idRayon",component:UpdateComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
