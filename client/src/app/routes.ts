import { Routes } from "@angular/router";

import { HomeComponent } from "./Component/home/home.component";
import { MenuComponent } from "./Component/menu/menu.component";
import { CakeDetailsComponent } from "./Component/cake-details/cake-details.component";
import { PastryDetailsComponent } from "./Component/pastry-details/pastry-details.component";
import { CustomizeComponent } from "./Component/customize/customize.component";

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
    }
];

export default routeConfig;