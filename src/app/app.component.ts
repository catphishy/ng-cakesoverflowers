import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { CakeComponent } from './Component/cake/cake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CakeComponent,
    RouterModule
  ],
  template: `
    <main>
      <nav class="navbar navbar-expand-lg" style="background-color: #F6EEE0; border-bottom: 3px solid #8E6944">
        <div class="container-fluid">
          <a class="navbar-brand" [routerLink]="['/']"><img src="./assets/cakesoverflowers.png"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/']">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/menu']">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/']">Customize</a>
              </li>
            </ul>
            <div class="d-flex">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="./assets/user-solid-24.png" alt="user" style="width:22px; height:22px"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src="./assets/cart-solid-24.png" alt="cart" style="width:22px; height:22px"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
    <footer style="border-top: 3px solid #8E6944;">
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
      <p class="text-center text-secondary-emphasis">Group 2 - 3ISB &#169; 2021</p>
    </footer>
  `
})
export class AppComponent {
  title = 'ng-cakesoverflowers';
}
