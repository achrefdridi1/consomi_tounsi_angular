import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { RetrievelivreurComponent } from './retrievelivreur/retrievelivreur.component';
import { RetrievereclamationComponent } from './retrievereclamation/retrievereclamation.component';
import { LivreurRegistrationService } from './livreur-registration.service';
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { EditlivreurComponent } from './editlivreur/editlivreur.component';
import { DatePipe } from '@angular/common';
import { EditreclamationComponent } from './editreclamation/editreclamation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { StatsComponent } from './stats/stats.component';





@NgModule({
  declarations: [
    AppComponent,
    AddlivreurComponent,
    AddreclamationComponent,
    RetrievelivreurComponent,
    RetrievereclamationComponent,
    EditlivreurComponent,
    EditreclamationComponent,
    AcceuilComponent,
    StatsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    
  ],
  providers: [LivreurRegistrationService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
