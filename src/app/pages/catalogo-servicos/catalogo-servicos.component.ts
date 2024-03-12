import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-catalogo-servicos',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './catalogo-servicos.component.html',
  styleUrl: './catalogo-servicos.component.scss'
})
export class CatalogoServicosComponent {

}
