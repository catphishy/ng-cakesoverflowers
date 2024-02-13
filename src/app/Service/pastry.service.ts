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
      name: "Chocolate Crinkles",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: `${this.baseUrl}/chocolate-crinkles.jpg`,
      price: 100
    },
    {
      id: 13,
      name: "Ensaymada",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: `${this.baseUrl}/ensaymada.jpg`,
      price: 100
    },
    {
      id: 13,
      name: "Egg Tart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: `${this.baseUrl}/egg-tart.jpg`,
      price: 100
    },
    {
      id: 14,
      name: "Oatmeal Cookies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: `${this.baseUrl}/oatmeal-cookies.jpg`,
      price: 100
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
