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
  template: `
    <div class="container p-5">
      <h2 class="text-center align-middle mb-3" style="color: #FFFCF8; font-family:Courgette, cursive;">Cakes</h2>
    </div>
    <section class="p-5 pt-2">
      <div class="row row-cols-auto">
        <app-cake 
          *ngFor="let cake of cakeList"
          [cake]="cake">
        </app-cake>
      </div>
      
    </section>
    <div class="container p-5">
      <h2 class="text-center align-middle mb-3" style="color: #FFFCF8; font-family:Courgette, cursive;">Cookies and Pastries</h2>
    </div>
    <section class="p-5 pt-2">
      <div class="row row-cols-auto">
        <app-pastry 
          *ngFor="let pastry of pastryList"
          [pastry]="pastry">
        </app-pastry>
      </div>
    </section>
      
  `,
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
