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
      description: "lorem ipsum",
      photo: `${this.baseUrl}/carrot-walnut.jpg`,
      price: 320
    },
    {
      id: 22,
      name: "Blueberry Cheesecake",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
      price: 320
    },
    {
      id: 22,
      name: "Strawberry Tres Leches",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
      price: 320
    },
  ];
  

  getAllCakes(): Cake[] {
    return this.cakeList;
  }

  getHousingLocationById(id: number): Cake | undefined {
    return this.cakeList.find(cake => cake.id === id);
  }

  constructor() { }
}
