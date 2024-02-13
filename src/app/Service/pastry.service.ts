import { Injectable } from '@angular/core';

import { Pastry } from '../Interface/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastryService {
  readonly baseUrl = '../../assets';
  
  pastryList: Pastry[] = [
    {
      id: 12,
      name: "Carrot Walnut Cake",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/carrot-walnut.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 13,
      name: "Blueberry Cheesecake",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 14,
      name: "Strawberry Tres Leches",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 15,
      name: "Strawberry Tres Leches",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
      pieces: 6,
      price: 320
    },
  ];

  getAllPastry(): Pastry[] {
    return this.pastryList;
  }

  getPastryById(id: number): Pastry | undefined {
    return this.pastryList.find(pastry => pastry.id === id);
  }

  addToCart(name: string, price: number, quantity: number) {
    let amount = price * quantity;
    console.log("You have added to cart:");
    console.log(`Pastry Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Quantity: ${quantity}`);
    console.log("Amount: " + amount);
  }

  constructor() { }
}
