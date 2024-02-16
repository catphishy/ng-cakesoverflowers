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
  template: `
    <section class="p-5">
      <div class="row">
        <div class="col-md-6">
          <div class="text-center mb-4">  
            <img [src]="pastry?.photo" alt="Photo of {{ pastry?.photo }}" style="width:70%; height:70%">
            </div>
          </div>
        <div class="col-md-6">
          <div class="d-flex flex-column flex-nowrap justify-content-evenly">  
            <h3 class="text-secondary-emphasis mt-3">{{ pastry?.name }}</h3>
            <h5 class="text-secondary-emphasis mt-2">{{ pastry?.description }}</h5>
            <p class="lead text-primary mt-2 mb-4"><strong>&#x20B1;{{ pastry?.price }}</strong></p>

            <form [formGroup]="addForm" (submit)="addToCart()">
              <div class="form-group mb-4">
                <input id="name" value="cake" hidden>
                <input id="price" value="234" hidden>
                <h6 class="text-secondary-emphasis">Quantity</h6>
                <input class="text-center text-secondary-emphasis form-control form-control-lg" type="number" value="1" id="quantity" style="width:72px">
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
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
