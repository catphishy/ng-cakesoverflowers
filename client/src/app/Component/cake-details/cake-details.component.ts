import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CakeService } from '../../Service/cake.service';
import { Cake } from '../../Interface/cake';

@Component({
  selector: 'app-cake-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: 'cake-details.component.html',
  styleUrl: './cake-details.component.css'
})
export class CakeDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cakeService = inject(CakeService);
  cake: Cake | undefined;
  cakeId = 0;

  addForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
  });

  constructor() {
    this.cakeId = Number(this.route.snapshot.params['id']);
    this.cake = this.cakeService.getCakeById(this.cakeId);
  }

  addToCart() {
    this.cakeService.addToCart(
      this.addForm.value.name ?? '',
      this.addForm.value.price ?? 0 ,
      this.addForm.value.quantity ?? 0
    );
  }
}
