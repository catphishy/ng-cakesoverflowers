import { Injectable } from '@angular/core';

import { Pastry } from '../Interface/pastry';

@Injectable({
  providedIn: 'root'
})
export class PastryService {
  readonly baseUrl = '../../assets';
  
  pastryList: Pastry[] = [
    {
      id: 22,
      name: "Carrot Walnut Cake",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/carrot-walnut.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 22,
      name: "Blueberry Cheesecake",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 22,
      name: "Strawberry Tres Leches",
      description: "lorem ipsum",
      photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
      pieces: 6,
      price: 320
    },
    {
      id: 22,
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

  constructor() { }
}
