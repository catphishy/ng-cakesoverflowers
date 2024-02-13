import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Frosting } from '../../Interface/frosting';
import { FrostingService } from '../../Service/frosting.service';

import { CustomizeService } from '../../Service/customize.service';

@Component({
  selector: 'app-frosting',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
  <div class="col">
  <div class="card card-body border border-0 mb-3 p-6" style="width: 16rem;">
    <img [src]="frosting.photo" alt="Photo of {{ frosting.photo }}" style="object-fit: fill">
    <h5 class="text-center text-secondary-emphasis mt-2">{{ frosting.name }}</h5>
    <p class="text-center text-secondary-emphasis"><small>&#x20B1;{{ frosting.price }}</small></p>
    <button (click)="customizeCake(frosting.name, frosting.price, 'frosting')" type="button" class="btn btn-primary">Select</button> 
  </div>
</div>
  `,
  styleUrl: './frosting.component.css'
})
export class FrostingComponent {
  @Input() frosting!: Frosting;

  frostingService = inject(FrostingService);
  customizeService = inject(CustomizeService);

  select(frosting: string) {
    this.frostingService.select(frosting);
  }

  customizeCake(name: string, price: number, eme:string) {
    this.customizeService.customizeCake(name, price, eme);
  }
}
