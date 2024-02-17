import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PastryService } from '../../Service/pastry.service';
import { Pastry } from '../../Interface/pastry';

@Component({
  selector: 'app-pastry-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pastry-details.component.html',
  styleUrl: './pastry-details.component.css'
})
export class PastryDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pastryService = inject(PastryService);
  pastry: Pastry | undefined;
  pastryId = 0;

  addForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
  });

  constructor() {
    this.pastryId = Number(this.route.snapshot.params['id']);
    this.pastry = this.pastryService.getPastryById(this.pastryId);
  }

  addToCart() {
    this.pastryService.addToCart(
      this.addForm.value.name ?? '',
      this.addForm.value.price ?? 0,
      this.addForm.value.quantity ?? 0
    );
  }
}
