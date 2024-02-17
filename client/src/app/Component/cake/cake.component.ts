import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Cake } from '../../Interface/cake';


@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
  @Input() cake!: Cake;
}
