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
  templateUrl: './pastry.component.html',
  styleUrl: './pastry.component.css'
})
export class PastryComponent {
  @Input() pastry!: Pastry;
}
