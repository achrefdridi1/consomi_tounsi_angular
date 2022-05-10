import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RayonComponent } from './rayon/rayon.component';
import { HttpClientModule } from '@angular/common/http';
import { SerachComponent } from './serach/serach.component';
import { RayonService } from './rayon.service';
import { StockComponent } from './stock/stock.component';
import { SerachStockComponent } from './serach-stock/serach-stock.component';
import { UpdateComponent } from './update/update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import { EditlivreurComponent } from './editlivreur/editlivreur.component';
import { RetrievelivreurComponent } from './retrievelivreur/retrievelivreur.component';
import { StatsComponent } from './stats/stats.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { EditreclamationComponent } from './editreclamation/editreclamation.component';

import { RetrievereclamationComponent } from './retrievereclamation/retrievereclamation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    SerachComponent,
    RayonComponent,
    StockComponent,
    SerachStockComponent,
    UpdateComponent,
    AddlivreurComponent,
    EditlivreurComponent,
    RetrievelivreurComponent,
    StatsComponent,
    AddreclamationComponent,
    EditreclamationComponent,
    RetrievereclamationComponent,
    AcceuilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
