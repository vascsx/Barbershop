import { Component } from '@angular/core';
import { InicioComponent } from '../../icons/inicio/inicio.component';
import { CalendarioComponent } from '../../icons/calendario/calendario.component';
import { ServicosComponent } from '../../icons/servicos/servicos.component';
import { LocalizacaoComponent } from '../../icons/localizacao/localizacao.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    InicioComponent ,
    CalendarioComponent,
    ServicosComponent,
    LocalizacaoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
