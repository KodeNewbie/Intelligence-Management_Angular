import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Commons/navigation/navigation.component';
import { FooterComponent } from './Commons/footer/footer.component';
import { HomeComponent } from './Commons/home/home.component';
import { HeaderComponent } from './Commons/header/header.component';
import { MissionListComponent } from './Components/mission-list/mission-list.component';
import { AddIntelComponent } from './Components/add-intel/add-intel.component';
import { LoginComponent } from './Components/login/login.component';
import { CareerComponent } from './Components/career/career.component';
import { SpyListComponent } from './Components/spy-list/spy-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFound404Component } from './Commons/not-found-404/not-found-404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MissionListComponent,
    AddIntelComponent,
    LoginComponent,
    CareerComponent,
    SpyListComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
