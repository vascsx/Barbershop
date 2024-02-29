import { Component } from '@angular/core';
import { VoltarComponent } from '../../icons/voltar/voltar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    VoltarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
