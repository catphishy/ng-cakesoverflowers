import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddonService } from '../../Service/addon.service';
import { Addon } from '../../Interface/addon';

import { CustomizeService } from '../../Service/customize.service';

@Component({
  selector: 'app-addon',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
      <div class="col">
      <div class="card card-body border border-0 mb-3 p-6" style="width: 16rem;">
        <img [src]="addon.photo" alt="Photo of {{ addon.photo }}" style="object-fit: fill">
        <h5 class="text-center text-secondary-emphasis mt-2">{{ addon.name }}</h5>
        <p class="text-center text-secondary-emphasis"><small>&#x20B1;{{ addon.price }}</small></p>
        <button (click)="customizeCake(addon.name, addon.price, 'addon')" type="button" class="btn btn-primary">Select</button> 
      </div>
    </div>
  `,
  styleUrl: './addon.component.css'
})
export class AddonComponent {
  @Input() addon!: Addon;

  addonService = inject(AddonService);
  customizeService = inject(CustomizeService);

  select(addon: string, addonPrice: number) {
    this.addonService.select(addon);
  }

  customizeCake(name: string, price: number, eme:string) {
    this.customizeService.customizeCake(name, price, eme);
  }
}
