import { Component } from '@angular/core';
import { CalendarioComponent } from '../../icons/calendario/calendario.component';
import { LocalizacaoComponent } from '../../icons/localizacao/localizacao.component';
import { ServicosComponent } from '../../icons/servicos/servicos.component';

@Component({
  selector: 'app-box-services',
  standalone: true,
  imports: [
    CalendarioComponent,
    LocalizacaoComponent,
    ServicosComponent,
  ],
  templateUrl: './box-services.component.html',
  styleUrl: './box-services.component.scss'
})
export class BoxServicesComponent {

  
}
