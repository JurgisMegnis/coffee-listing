import { Injectable } from '@angular/core';
import { CoffeeListing } from './coffee-listing';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  url = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

  constructor() { }

  async getAllCoffeeItems(): Promise<CoffeeListing[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        console.error('Network response was not ok:', response.statusText)
        return []
      }
      const data = await response.json()
      return data ?? [];
    } catch (error) {
      console.error('Fetch error', error)
      return [];
    }
  }
}
