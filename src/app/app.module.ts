import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipeFolder/equipe/equipe.component';
import { ListEquipeComponent } from './equipeFolder/list-equipe/list-equipe.component';
import { ItemEquipeComponent } from './equipeFolder/item-equipe/item-equipe.component';
import { DetailEquipeComponent } from './equipeFolder/detail-equipe/detail-equipe.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    ListEquipeComponent,
    ItemEquipeComponent,
    DetailEquipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
