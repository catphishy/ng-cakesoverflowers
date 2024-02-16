import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { Pastry } from '../../Interface/pastry';

@Component({
  selector: 'app-pastry',
  standalone: true,
  imports: [
    RouterModule,
  ],
  template: `
    <div class="col">
      <div class="card card-body border border-0 mb-3 p-6" style="width: 21rem;">
        <img [src]="pastry.photo" alt="Photo of {{ pastry.photo }}" style="object-fit: fill">
        <h5 class="text-center text-secondary-emphasis mt-2">{{ pastry.name }}</h5>
        <p class="text-center text-secondary-emphasis"><small>&#x20B1;{{ pastry.price }}</small></p>
        <a [routerLink]="['/pastry', pastry.id]" type="button" class="btn btn-primary">View</a>          
      </div>
    </div>
  `,
  styleUrl: './pastry.component.css'
})
export class PastryComponent {
  @Input() pastry!: Pastry;
}
