import { Injectable } from '@angular/core';
import { customize } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CustomizeService {

  customizeCake(name: string, price: number, eme: string) {
    console.log(name + ", " + price + ", " + eme);
    const element: HTMLElement = document.getElementById(eme) as HTMLElement
    element.innerHTML = name;

    const emePrice: HTMLElement = document.getElementById(eme+"Price") as HTMLElement
    emePrice.innerHTML = price.toString();

    this.calculate(eme, price);
  }

  calculate(eme: string, price: number) {
    if (eme == "base") {
      customize[0] = price;
      console.log(customize[0]);
    } else if (eme == "frosting") {
      customize[1] = price;
      console.log(customize[1]);
    } else if (eme == "addon") {
      customize[2] = price;
      console.log(customize[2]);
    }
    customize[3] = customize[0] + customize[1] + customize[2];
    
    const amount: HTMLElement = document.getElementById("amount") as HTMLElement
    amount.innerHTML = customize[3].toString();
    console.log(customize[3]);
  }

  addToCart() {
    if (customize[0] != 0 && customize[1] != 0) {
      console.log("Add to cart: " + customize[3]);
    } else if (customize[0] == 0) {
      console.log("Please select a base");
    } else {
      console.log("Please select a frosting");
    }
  }

  constructor() { }
}
