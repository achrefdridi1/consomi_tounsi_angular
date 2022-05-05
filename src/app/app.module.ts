import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RayonComponent } from './rayon/rayon.component';
import { HttpClientModule } from '@angular/common/http';
import { SerachComponent } from './serach/serach.component';
import { RayonService } from './rayon.service';
import { StockComponent } from './stock/stock.component';
import { SerachStockComponent } from './serach-stock/serach-stock.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SerachComponent,
    RayonComponent,
    UpdateProduitComponent,
    StockComponent,
    SerachStockComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
