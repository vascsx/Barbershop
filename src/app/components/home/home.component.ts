import { Component } from '@angular/core';
import { BoxServicesComponent } from '../box-services/box-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoxServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
