import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeItemComponent } from "./coffee-item/coffee-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coffee-listing';
}
