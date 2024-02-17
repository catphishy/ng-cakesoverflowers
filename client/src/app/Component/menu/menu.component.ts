import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakeComponent } from '../cake/cake.component';
import { Cake } from '../../Interface/cake';
import { CakeService } from '../../Service/cake.service';

import { PastryComponent } from '../pastry/pastry.component';
import { Pastry } from '../../Interface/pastry';
import { PastryService } from '../../Service/pastry.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    CakeComponent,
    PastryComponent
  ],
  templateUrl: 'menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // readonly baseUrl = '../../assets';

  // cakeList: Cake[] = [
  //   {
  //     id: 22,
  //     name: "Carrot Walnut Cake",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/carrot-walnut.jpg`,
  //     price: 320
  //   },
  //   {
  //     id: 22,
  //     name: "Blueberry Cheesecake",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
  //     price: 320
  //   },
  //   {
  //     id: 22,
  //     name: "Strawberry Tres Leches",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
  //     price: 320
  //   },
  // ];

  // pastryList: Pastry[] = [
  //   {
  //     id: 22,
  //     name: "Carrot Walnut Cake",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/carrot-walnut.jpg`,
  //     pieces: 6,
  //     price: 320
  //   },
  //   {
  //     id: 22,
  //     name: "Blueberry Cheesecake",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/blueberry-cheesecake.jpg`,
  //     pieces: 6,
  //     price: 320
  //   },
  //   {
  //     id: 22,
  //     name: "Strawberry Tres Leches",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
  //     pieces: 6,
  //     price: 320
  //   },
  //   {
  //     id: 22,
  //     name: "Strawberry Tres Leches",
  //     description: "lorem ipsum",
  //     photo: `${this.baseUrl}/strawberry-tres-leches.jpg`,
  //     pieces: 6,
  //     price: 320
  //   },
  // ];

  cakeList: Cake[] = [];
  cakeService: CakeService = inject(CakeService);

  pastryList: Pastry[] = [];
  pastryService: PastryService = inject(PastryService);

  constructor() {
    this.cakeList = this.cakeService.getAllCakes();
    this.pastryList = this.pastryService.getAllPastry();
  }
}
