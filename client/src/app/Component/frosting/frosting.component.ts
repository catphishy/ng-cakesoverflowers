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
  templateUrl: './frosting.component.html',
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
