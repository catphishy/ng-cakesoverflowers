import { Routes } from "@angular/router";

import { HomeComponent } from "./Component/home/home.component";
import { MenuComponent } from "./Component/menu/menu.component";
import { CakeComponent } from "./Component/cake/cake.component";
import { PastryComponent } from "./Component/pastry/pastry.component";

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
        component: CakeComponent,
        title: 'Cake Details'
    },
    {
        path: 'pastry/:id',
        component: PastryComponent,
        title: 'Pastry Details'
    }
];

export default routeConfig;