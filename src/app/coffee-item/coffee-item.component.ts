import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListing } from '../coffee-listing';

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="coffee-item">
      @if (coffeeListing.popular) {
        <div class="popular">Popular</div>
      }
      <img [src]="coffeeListing.image" alt="Shot from above of a cup of {{coffeeListing.name}}" class="photo">
      <div class="main-info">
        <h2>{{coffeeListing.name}}</h2>
        <div class="price">{{coffeeListing.price}}</div>
      </div>
      <div class="secondary-info">
        @if (coffeeListing.votes > 0) {
          <div class="rating">
            <img src="assets/Star_fill.svg" alt="">
            <h2>{{coffeeListing.rating}} <span>({{coffeeListing.votes}} votes)</span></h2>
          </div>
        } @else {
          <div class="no-rating">
            <img src="assets/Star.svg" alt="">
            <h2>No ratings</h2>
          </div>
        }
        @if (!coffeeListing.available) {
          <h2 class="sold-out">Sold out</h2>
        }

      </div>
    </section>
  `,
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {
  @Input() coffeeListing!:CoffeeListing;
}
