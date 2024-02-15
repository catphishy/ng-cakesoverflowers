import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeService } from '../../Service/customize.service';

import { BaseComponent } from '../base/base.component';
import { Base } from '../../Interface/base';
import { BaseService } from '../../Service/base.service';

import { FrostingComponent } from '../frosting/frosting.component';
import { Frosting } from '../../Interface/frosting';
import { FrostingService } from '../../Service/frosting.service';

import { Addon } from '../../Interface/addon';
import { AddonComponent } from '../addon/addon.component';
import { AddonService } from '../../Service/addon.service';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [
    CommonModule,
    BaseComponent,
    FrostingComponent,
    AddonComponent
  ],
  template: `
    <div class="container p-5">
      <h2 class="text-center align-middle mb-3" style="color: #FFFCF8; font-family:Courgette, cursive;">Custom Cakes</h2>
    </div>
    <section class="p-5">
      <h3 class="text-secondary-emphasis mb-3">1) Pick your cake base:</h3>
      <div class="row row-cols-auto">
        <app-base 
          *ngFor="let base of baseList"
          [base]="base">
        </app-base>
      </div>
      <h3 class="text-secondary-emphasis mt-3 mb-3">2) Select a frosting:</h3>
      <div class="row row-cols-auto">
        <app-frosting 
          *ngFor="let frosting of frostingList"
          [frosting]="frosting">
        </app-frosting>
      </div>
      <h3 class="text-secondary-emphasis mt-3 mb-3">3) Addons:</h3>
      <div class="row row-cols-auto">
        <app-addon 
          *ngFor="let addon of addonList"
          [addon]="addon">
        </app-addon>
      </div>
      <div class="p-3" style="max-width:500px">
        <h5 class="text-secondary-emphasis">You've Selected</h5>
        <div class="row">
          <div class="col-8">
            <p class="text-secondary-emphasis">Base: <span id="base"></span></p>
          </div>
          <div class="col-4">
            <p class="text-secondary-emphasis">&#x20B1;<span id="basePrice">--</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <p class="text-secondary-emphasis">Frosting: <span id="frosting"></span></p>
          </div>
          <div class="col-4">
            <p class="text-secondary-emphasis">&#x20B1;<span id="frostingPrice">--</span></p>
          </div>
        </div>
        <div class="row" style="border-bottom:2px solid #8E6944">
          <div class="col-8">
            <p class="text-secondary-emphasis">Addon: <span id="addon"></span></p>
          </div>
          <div class="col-4">
            <p class="text-secondary-emphasis">&#x20B1;<span id="addonPrice">--</span></p>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-8">
            <p class="text-secondary-emphasis">Amount:</p>
          </div>
          <div class="col-4">
            <p class="text-secondary-emphasis">&#x20B1;<span id="amount">--</span></p>
          </div>
        </div>
        <button (click)="addToCart()" type="button" class="btn btn-secondary btn-lg mt-3" style="width:200px">Add to Cart</button>
      </div>
      
    </section>
  `,
  styleUrl: './customize.component.css'
})
export class CustomizeComponent {
  customizeService: CustomizeService = inject(CustomizeService);

  baseList: Base[] = [];
  baseService: BaseService = inject(BaseService);

  frostingList: Frosting[] = [];
  frostingService: FrostingService = inject(FrostingService);

  addonList: Addon[] = [];
  addonService: AddonService = inject(AddonService);

  addToCart() {
    this.customizeService.addToCart();
  }

  constructor() {
    this.baseList = this.baseService.getAllBases();
    this.frostingList = this.frostingService.getAllFrosting();
    this.addonList = this.addonService.getAllAddons();
  }
}
