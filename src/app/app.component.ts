import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { CakeComponent } from './Component/cake/cake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CakeComponent
  ],
  template: `
    <main>
      <nav class="navbar navbar-expand-lg" style="background-color: #F6EEE0; border-bottom: 3px solid #8E6944">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./assets/cakesoverflowers.png"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Customize</a>
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
        <app-home></app-home>
      </section>
    </main>
  `
})
export class AppComponent {
  title = 'ng-cakesoverflowers';
}
