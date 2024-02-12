import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container container-blend p-5">
      <h3>Great Taste in every bite</h3>
      <p class="text-primary-emphasis">Not sure what to buy for your special some? It's an easy choice - <i>Cakes Over Flowers</i></p>
    </div>
    <section class="p-5">
      <h3 class="text-center mb-3">Bestsellers</h3>
      <div class="row">
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/blueberry-cheesecake.jpg">
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/carrot-walnut.jpg">
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/strawberry-tres-leches.jpg">
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/matcha-tres-leches.jpg">
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
