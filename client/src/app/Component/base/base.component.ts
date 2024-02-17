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
  templateUrl: './base.component.html',
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
