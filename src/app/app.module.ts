import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AngformComponent } from './angform/angform.component';
import { RtfComponent } from './rtf/rtf.component';
import { FooterComponent } from './footer/footer.component';
import { UtdfComponent } from './utdf/utdf.component';
import { TechnologyComponent } from './technology/technology.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectivesComponent,
    NavComponent,
    AngformComponent,
    RtfComponent,
    FooterComponent,
    UtdfComponent,
    TechnologyComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
