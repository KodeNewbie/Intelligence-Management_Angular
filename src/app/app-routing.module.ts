import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Commons/home/home.component';
import { MissionListComponent } from './Components/mission-list/mission-list.component';
import { LoginComponent } from './Components/login/login.component';
import { CareerComponent } from './Components/career/career.component';
import { AddIntelComponent } from './Components/add-intel/add-intel.component';
import { NotFound404Component } from './Commons/not-found-404/not-found-404.component';
import { SpyListComponent } from './Components/spy-list/spy-list.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'legacy' , component: MissionListComponent },
  { path: 'career' , component: CareerComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'intel' , component: AddIntelComponent },
  { path: 'agents' , component: SpyListComponent },
  { path: '**' , component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
