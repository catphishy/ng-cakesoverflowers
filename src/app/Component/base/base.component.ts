import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseService } from '../../Service/base.service';
import { Base } from '../../Interface/base';

import { CustomizeService } from '../../Service/customize.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <div class="col">
      <div class="card card-body border border-0 mb-3 p-6" style="width: 16rem;">
        <img [src]="base.photo" alt="Photo of {{ base.photo }}" style="object-fit: fill">
        <h5 class="text-center text-secondary-emphasis mt-2">{{ base.name }}</h5>
        <p class="text-center text-secondary-emphasis"><small>&#x20B1;{{ base.price }}</small></p>
        <button (click)="customizeCake(base.name, base.price, 'base')" type="button" class="btn btn-primary">Select</button>          
      </div>
    </div>
  `,
  styleUrl: './base.component.css'
})
export class BaseComponent {
  @Input() base!: Base;

  baseService = inject(BaseService);
  customizeService = inject(CustomizeService);


  select(base: string, basePrice: number) {
    this.baseService.select(base, basePrice);
  }

  customizeCake(name: string, price: number, eme:string) {
    this.customizeService.customizeCake(name, price, eme);
  }
}
