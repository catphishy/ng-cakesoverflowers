import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizeService {

  customizeCake(name: string, price: number, eme: string) {
    let a = 0; //base price
    let b = 0; //frosting price
    let c = 0; //addon price
    console.log(name + ", " + price + ", " + eme);
    const element: HTMLElement = document.getElementById(eme) as HTMLElement
    element.innerHTML = name;

    const emePrice: HTMLElement = document.getElementById(eme+"Price") as HTMLElement
    emePrice.innerHTML = price.toString();

    this.calculate();
  }

  calculate() {
    
  }

  constructor() { }
}
