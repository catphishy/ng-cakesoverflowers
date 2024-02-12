import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container container-blend p-5" id="main-cover">
      <h3 class="text-secondary-emphasis">Great Taste in every bite</h3>
      <p class="text-secondary-emphasis">Not sure what to buy for your special someone? It's an easy choice - <i>Cakes Over Flowers!</i></p>
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
      <h3 class="text-center text-secondary-emphasis mt-3">Testimonials</h3>
      <p class="text-center text-secondary-emphasis m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="text-center text-secondary"><strong>- JOHN DOE</strong></p>
    </div>
    <div class="position-relative container container-blend p-5" id="custom-cake">
      <h2 class="text-center text-secondary-emphasis mt-2">Customize your own cake</h2>
      <br>
      <h6 class="text-center lead text-secondary-emphasis">Let us bake your ideas to life</h6>
      <div class="position-absolute top-50 start-50 translate-middle mt-4">
        <button type="button" class="btn btn-primary">Order Now</button>
      </div>
    </div>
    <section class="p-5">
      <div class="row">
        <div class="col-md-4 p-4 pb-0">
          <div class="card card-body border border-0 mb-3 p-6" >
            <h4 class="text-secondary-emphasis mb-3">NEWSLETTER</h4>
            <form>
              <div class="form-group mb-3">
                <p>Stay updated with our news and promos</p>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="col-md-4 p-4 pb-0">
          <div class="card card-body border border-0 mb-3 p-6" >
            <h4 class="text-secondary-emphasis mb-3">CONNECT</h4>
            <a class="mb-2">Home</a>
            <a class="mb-2">Shop</a>
            <a class="mb-2">Customize</a>
          </div>
        </div>
        <div class="col-md-4 p-4 pb-0" style="">
          <div class="card card-body border border-0 mb-3 p-6" style="object-fit: cover;">
            <h4 class="text-secondary-emphasis mb-3">EXPLORE</h4>
            <div class="mb-2">
              <img src="../../../assets/contact-solid-24.png" style="width:22px; height:22px; display: inline-block; vertical-align: middle;">
              <span style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;Contact Us</span>
            </div>
            <div class="mb-2">
              <img src="../../../assets/envelope-solid-24.png" style="width:22px; height:22px; display: inline-block; vertical-align: middle;">
              <span style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;cakesoverflowers&#64;gmail.com</span>
            </div>
            <div class="mb-2">
              <img src="../../../assets/phone-solid-24.png" style="width:22px; height:22px; display: inline-block; vertical-align: middle;">
              <span style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;(63)912 345 6789</span>
            </div>
            <div class="mb-2">
              <img src="../../../assets/instagram-alt-logo-24.png" style="width:22px; height:22px; display: inline-block; vertical-align: middle;">
              <span style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;cakes.over.flowers</span>
            </div>
            <div class="mb-2">
              <img src="../../../assets/time-five-solid-24.png" style="width:22px; height:22px; display: inline-block; vertical-align: middle;">
              <span style="display: inline-block; vertical-align: middle;">&nbsp;&nbsp;9AM - 10PM (GMT +8)</span>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
