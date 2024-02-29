import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-profissional',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './profissional.component.html',
  styleUrl: './profissional.component.scss'
})
export class ProfissionalComponent {

}
