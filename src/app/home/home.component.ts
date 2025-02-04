import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeItemComponent } from '../coffee-item/coffee-item.component';
import { CoffeeListing } from '../coffee-listing';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeeItemComponent, CommonModule],
  template: `
    @if (coffeeList && coffeeList.length > 0) {
      <app-coffee-item *ngFor="let coffeeItem of coffeeList" [coffeeListing]="coffeeItem"></app-coffee-item>
    } @else {
      <p>Loading coffee items..</p>
    }
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  coffeeList: CoffeeListing[] = [];
  coffeeService: CoffeeService = inject(CoffeeService);

  ngOnInit(): void {
    this.loadCoffeeItems();
  }

  async loadCoffeeItems() {
    this.coffeeList = await this.coffeeService.getAllCoffeeItems();
  }
}
