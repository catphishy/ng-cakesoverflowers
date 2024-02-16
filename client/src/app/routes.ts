import { Routes } from "@angular/router";

import { HomeComponent } from "./Component/home/home.component";
import { MenuComponent } from "./Component/menu/menu.component";
import { CakeDetailsComponent } from "./Component/cake-details/cake-details.component";
import { PastryDetailsComponent } from "./Component/pastry-details/pastry-details.component";
import { CustomizeComponent } from "./Component/customize/customize.component";
import { LoginComponent } from "./Component/login/login.component";
import { RegisterComponent } from "./Component/register/register.component";
import { CartComponent } from "./Component/cart/cart.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'menu',
        component: MenuComponent,
        title: 'Menu'
    },
    {
        path: 'cake/:id',
        component: CakeDetailsComponent,
        title: 'Cake Details'
    },
    {
        path: 'pastry/:id',
        component: PastryDetailsComponent,
        title: 'Pastry Details'
    },
    {
        path: 'customize',
        component: CustomizeComponent,
        title: 'Customize Cake'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    }
];

export default routeConfig;