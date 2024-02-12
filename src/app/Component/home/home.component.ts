import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container container-blend p-5" id="main-cover">
      <h3 class="text-secondary-emphasis">Great Taste in every bite</h3>
      <p class="text-secondary-emphasis">Not sure what to buy for your special some? It's an easy choice - <i>Cakes Over Flowers!</i></p>
    </div>
    <section class="p-5" style="border-bottom: 3px solid #8E6944">
      <h3 class="text-center text-secondary-emphasis mb-3">Bestsellers</h3>
      <div class="row">
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/blueberry-cheesecake.jpg" style="object-fit: fill">
            <h5 class="text-center text-secondary-emphasis mt-2">Blueberry Cheesecake</h5>
            <p class="text-center text-secondary-emphasis"><small>A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping</small></p>
            <button type="button" class="btn btn-primary">View</button>          
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/carrot-walnut.jpg">
            <h5 class="text-center text-secondary-emphasis mt-2">Carrot Walnut Cake</h5>
            <p class="text-center text-secondary-emphasis"><small>A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping</small></p>
            <button type="button" class="btn btn-primary">View</button>  
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" >
            <img src="../../../assets/strawberry-tres-leches.jpg">
            <h5 class="text-center text-secondary-emphasis mt-2">Strawberry Tres Leches</h5>
            <p class="text-center text-secondary-emphasis"><small>A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping</small></p>
            <button type="button" class="btn btn-primary">View</button>  
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-body border border-0 mb-3 p-6" style="object-fit: cover;">
            <img src="../../../assets/matcha-tres-leches.jpg">
            <h5 class="text-center text-secondary-emphasis mt-2">Matcha Tres Leches</h5>
            <p class="text-center text-secondary-emphasis"><small>A buttery graham cracker crust, a creamy cheesecake center, and a tangy blueberry topping</small></p>
            <button type="button" class="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </section>
    <div class="position-relative container container-blend p-5" id="cakes-cover">
      <h2 class="text-center text-secondary-emphasis mt-2">Our Cakes</h2>
      <br>
      <h6 class="text-center lead text-secondary-emphasis">Made for something special</h6>
      <div class="position-absolute top-50 start-50 translate-middle mt-4">
        <button type="button" class="btn btn-primary">Order Now</button>
      </div>
      

    </div>
    <div class="container container-blend p-5" id="testimonials">
      <h3 class="text-secondary-emphasis">Great Taste in every bite</h3>
      <p class="text-secondary-emphasis">Not sure what to buy for your special some? It's an easy choice - <i>Cakes Over Flowers!</i></p>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
