import {Component} from '@angular/core';
import {LaptopService} from './service/laptop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advanced-search-front';

  constructor() {
  }
}
