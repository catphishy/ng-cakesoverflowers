import { Injectable } from '@angular/core';

import { Frosting } from '../Interface/frosting';

@Injectable({
  providedIn: 'root'
})
export class FrostingService {
  readonly baseUrl = '../../assets';

  frostingList: Frosting[] = [
    {
      id: 0,
      name: "Chestnut Cream",
      photo: `${this.baseUrl}/chestnut.jpg`,
      price: 550
    },
    {
      id: 1,
      name: "Cream Cheese",
      photo: `${this.baseUrl}/cream-cheese.jpg`,
      price: 550
    },
    {
      id: 2,
      name: "Fresh Cream",
      photo: `${this.baseUrl}/fresh cream.jpg`,
      price: 450
    },
    {
      id: 3,
      name: "Dark Chocoloate",
      photo: `${this.baseUrl}/dark-chocolate.jpg`,
      price: 450
    }
  ];

  getAllFrosting(): Frosting[] {
    return this.frostingList;
  }

  select(frostingName: string) {
    console.log(frostingName);
    const element: HTMLElement = document.getElementById('frosting') as HTMLElement
    element.innerHTML = frostingName;
  }

  constructor() { }
}
