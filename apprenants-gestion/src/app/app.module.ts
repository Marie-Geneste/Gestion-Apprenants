import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GestionApprenantComponent } from './gestion-apprenant/gestion-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { Page404Component } from './page404/page404.component';
import { ViewApprenantComponent } from './view-apprenant/view-apprenant.component';
import { FormationApprenantComponent } from './formation-apprenant/formation-apprenant.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFormationComponent } from './view-formation/view-formation.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    GestionApprenantComponent,
    AddApprenantComponent,
    EditApprenantComponent,
    Page404Component,
    ViewApprenantComponent,
    FormationApprenantComponent,
    ViewFormationComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
