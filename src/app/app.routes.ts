import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { nopageComponent } from './pages/404/404.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', component: nopageComponent },
];
