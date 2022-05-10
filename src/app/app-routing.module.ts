import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { EditlivreurComponent } from './editlivreur/editlivreur.component';
import { EditreclamationComponent } from './editreclamation/editreclamation.component';
import { RayonComponent } from './rayon/rayon.component';
import { RetrievelivreurComponent } from './retrievelivreur/retrievelivreur.component';
import { RetrievereclamationComponent } from './retrievereclamation/retrievereclamation.component';
import { SerachStockComponent } from './serach-stock/serach-stock.component';

import { SerachComponent } from './serach/serach.component';
import { StatsComponent } from './stats/stats.component';
import { StockComponent } from './stock/stock.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"",redirectTo:"rayon",pathMatch:"full"},
  {path:"addRayon",component:RayonComponent},
  {path:"serach",component:SerachComponent},
  {path:"addStock",component:StockComponent},
  {path:"serach-stock",component:SerachStockComponent},
  {path:"registerlivreur",component:AddlivreurComponent},
  {path:"update/:idRayon",component:UpdateComponent},
  {path:"retrievelivreur",component:RetrievelivreurComponent},
  {path:'edit/:livreur_id',component:EditlivreurComponent},
  {path:"stats",component:StatsComponent},
  {path:'editrec/:reclamation_id',component:EditreclamationComponent},
  {path:"ajouterreclamation",component:AddreclamationComponent},
  {path:"retrievereclamation",component:RetrievereclamationComponent},
  {path:"home",component:AcceuilComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
