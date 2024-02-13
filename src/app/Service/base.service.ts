import { Injectable } from '@angular/core';

import { Base } from '../Interface/base';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  readonly baseUrl = '../../assets';

  baseList: Base[] = [
    {
      id: 0,
      name: "Red Velvet",
      photo: `${this.baseUrl}/red-velvet.jpg`,
      price: 450
    },
    {
      id: 1,
      name: "Carrot",
      photo: `${this.baseUrl}/carrot.jpg`,
      price: 450
    },
    {
      id: 2,
      name: "Vanilla Crepe",
      photo: `${this.baseUrl}/vanilla-crepe.jpg`,
      price: 420
    },
    {
      id: 3,
      name: "Banana Walnut",
      photo: `${this.baseUrl}/banana-walnut.jpg`,
      price: 500
    },
    {
      id: 4,
      name: "Flourless Chocolate",
      photo: `${this.baseUrl}/flourless-chocolate.jpg`,
      price: 500
    }
  ];

  getAllBases(): Base[] {
    return this.baseList;
  }

  select(baseName: string, basePrice: number) {
    console.log(baseName+ ", " + basePrice);
    const element: HTMLElement = document.getElementById('base') as HTMLElement
    element.innerHTML = baseName;
  }

  constructor() { }
}
