import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { EditlivreurComponent } from './editlivreur/editlivreur.component';
import { RetrievelivreurComponent } from './retrievelivreur/retrievelivreur.component';
import { RetrievereclamationComponent } from './retrievereclamation/retrievereclamation.component';
import { Livreur } from './livreur';
import { EditreclamationComponent } from './editreclamation/editreclamation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { StatsComponent } from './stats/stats.component';



const routes: Routes = [

  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:AcceuilComponent},
  {path:"registerlivreur",component:AddlivreurComponent},
  {path:"retrievelivreur",component:RetrievelivreurComponent},
  {path:"ajouterreclamation",component:AddreclamationComponent},
  {path:"retrievereclamation",component:RetrievereclamationComponent},
  {path:'edit/:livreur_id',component:EditlivreurComponent},
  {path:'editrec/:reclamation_id',component:EditreclamationComponent},
  {path:"stats",component:StatsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
