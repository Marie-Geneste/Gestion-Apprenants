import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GestionApprenantComponent } from './gestion-apprenant/gestion-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { ViewApprenantComponent } from './view-apprenant/view-apprenant.component';
import { FormationApprenantComponent } from './formation-apprenant/formation-apprenant.component';
import { Page404Component } from './page404/page404.component';
import { ViewFormationComponent } from './view-formation/view-formation.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component : HomePageComponent
  },
  {
    path: "apprenants", component : GestionApprenantComponent
  },
  {
    path: "apprenants/add", component : AddApprenantComponent
  },
  {
    path: "apprenants/edit/:apprenantId", component : EditApprenantComponent
  },
  {
    path: "apprenants/view/:apprenantId", component : ViewApprenantComponent
  },
  {
    path: "formations", component : FormationApprenantComponent
  },
  {
    path: "formations/view/:formationId", component : ViewFormationComponent
  },
  {
    path:"**", component : Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
