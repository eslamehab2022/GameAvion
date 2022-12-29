import { Component } from '@angular/core';
import { routingAnimstion } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[routingAnimstion]
})
export class AppComponent {
  title = 'GameAvion';
}
