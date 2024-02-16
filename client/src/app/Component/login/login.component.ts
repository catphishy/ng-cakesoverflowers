import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <section class="p-5">
      <div class="d-flex align-items-center justify-content-center">
        <div class="rounded-3 mb-4 form-card">
          <h3 class="text-center text-secondary-emphasis mb-3">Login to your Account</h3>
          <form>
            <div class="form-group row d-flex justify-content-center">
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off">
              </div>
            </div>

            <div class="d-grid mt-4">
              <a class="text-end" [routerLink]="['/']">Forgot Password?</a>
              <button class="btn btn-primary mt-1" type="button">LOGIN</button>
            </div>
          </form>
          <p class="text-secondary-emphasis mt-4">Don't have an account? <a [routerLink]="['/register']">Sign Up</a></p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
