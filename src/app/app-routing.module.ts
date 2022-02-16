import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngformComponent } from './angform/angform.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FooterComponent } from './footer/footer.component';
import { PipesComponent } from './pipes/pipes.component';
import { RtfComponent } from './rtf/rtf.component';
import { TechnologyComponent } from './technology/technology.component';
import { UtdfComponent } from './utdf/utdf.component';

const routes: Routes = [

{path:"databinding",component:DatabindingComponent},
{path:"directive",component:DirectivesComponent},

{path:"angform",component:AngformComponent,children:[{path:"utdf",component:UtdfComponent},
{path:"rtf",component:RtfComponent}]},

{path:"footer",component:FooterComponent},
{path:"technology",component:TechnologyComponent},
{path:"pipes",component:PipesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
