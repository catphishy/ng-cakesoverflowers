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
  templateUrl: './customize.component.html',
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
