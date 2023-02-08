import { Component } from '@angular/core';

// Adding "standalone: true" causes this error NG6008: Component AppComponent is standalone,
// and cannot be declared in an NgModule.Did you mean to import it instead?


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'standalone-component';
}
