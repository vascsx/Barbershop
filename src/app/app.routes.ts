import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';
import { EscolhaServiceComponent } from './pages/escolha-service/escolha-service.component';
import { CatalogoServicosComponent } from './pages/catalogo-servicos/catalogo-servicos.component';
import { LocalizacaoComponent } from './icons/localizacao/localizacao.component';
import { LocalzationComponent } from './pages/localzation/localzation.component';

export const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  } ,

  {
    path: "profissional",
    component: ProfissionalComponent
  },

  {
    path: "services",
    component: EscolhaServiceComponent,
  },

  {
    path: "catalogo",
    component: CatalogoServicosComponent
  },

  {
    path: "localizacao",
    component: LocalzationComponent
  }

  
];
