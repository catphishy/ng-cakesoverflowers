import { Injectable } from '@angular/core';

import { Addon } from '../Interface/addon';

@Injectable({
  providedIn: 'root'
})
export class AddonService {
  readonly baseUrl = '../../assets';

  addonList: Addon[] = [
    {
      id: 0,
      name: "Fresh Strawberries",
      photo: `${this.baseUrl}/strawberries.jpg`,
      price: 250
    },
    {
      id: 1,
      name: "Fresh Mangoes",
      photo: `${this.baseUrl}/mangoes.jpg`,
      price: 200
    },
    {
      id: 2,
      name: "Oreos",
      photo: `${this.baseUrl}/oreos.jpg`,
      price: 150
    }
  ];

  getAllAddons(): Addon[] {
    return this.addonList;
  }

  select(addonName: string) {
    console.log(addonName);
    const element: HTMLElement = document.getElementById('addon') as HTMLElement
    element.innerHTML = addonName;
  }

  constructor() { }
}
