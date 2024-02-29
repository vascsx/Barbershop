import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';

export const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  } ,

  {
    path: "escolha",
    component: ProfissionalComponent
  }
];
