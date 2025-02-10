import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeItemComponent } from '../coffee-item/coffee-item.component';
import { CoffeeListing } from '../coffee-listing';
import { CoffeeService } from '../coffee.service';
import { SegmentControlComponent } from '../segment-control/segment-control.component';
import { SegmentControl } from '../segment-control';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeeItemComponent, CommonModule, SegmentControlComponent],
  template: `
    <section class="intro">
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <img src="assets/vector.svg" alt="">
    </section>
    <section class="filter">
      <app-segment-control *ngFor='let filterItem of productFilter' [segmentControl]="filterItem" (selectionChange)="filterResults($event)"></app-segment-control>
    </section>
    <section class="coffee-grid">
      @if (coffeeList && coffeeList.length > 0) {
        <app-coffee-item *ngFor="let coffeeItem of filteredCofeeList" [coffeeListing]="coffeeItem"></app-coffee-item>
      } @else {
        <p>Loading coffee items..</p>
      }
    </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  coffeeList: CoffeeListing[] = [];
  coffeeService: CoffeeService = inject(CoffeeService);
  filteredCofeeList: CoffeeListing[] = [];
  productFilter: SegmentControl[] = [
    {
      "id": 1,
      "name": "All Products",
      "checked": true,
    },
    {
      "id": 2,
      "name": "Available now",
      "checked": false,
    }
  ];

  ngOnInit(): void {
    this.loadCoffeeItems();
  }

  async loadCoffeeItems() {
    this.coffeeList = await this.coffeeService.getAllCoffeeItems();
    this.filteredCofeeList = this.coffeeList;
  }

  filterResults(value:string) {
    if (value === "Available now") {
      this.filteredCofeeList = this.coffeeList.filter(coffeeItem => coffeeItem.available)
    } else {
      this.filteredCofeeList = this.coffeeList
    }
    
  }

}
