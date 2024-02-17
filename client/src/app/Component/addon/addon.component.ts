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
  templateUrl: './addon.component.html',
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
