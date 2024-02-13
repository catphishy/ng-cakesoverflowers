import { Injectable } from '@angular/core';

import { Cake } from '../Interface/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  readonly baseUrl = '../../assets';

  cakeList: Cake[] = [
    {
      id: 22,
      name: "Carrot Walnut Cake",
      description: "A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping",
      photo: `${this.baseUrl}/carrot-walnut.jpg`,
      price: 320
    },
    {
      id: 23,
      name: "Blueberry Cheesecake",
      description: "A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping",
      photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
      price: 320
    },
    {
      id: 24,
      name: "Strawberry Tres Leches",
      description: "A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping",
      photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
      price: 320
    },
  ];
  

  getAllCakes(): Cake[] {
    return this.cakeList;
  }

  getCakeById(id: number): Cake | undefined {
    return this.cakeList.find(cake => cake.id === id);
  }

  addToCart(name: string, price: number, quantity: number) {
    let amount = price * quantity;
    console.log("You have added to cart:");
    console.log(`Cake Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Quantity: ${quantity}`);
    console.log("Amount: " + amount);
  }

  constructor() { }
}
