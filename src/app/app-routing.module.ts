import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {OrderStatusComponent} from './order-status/order-status.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id/:products', component: ProductListComponent },
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent},
  { path: 'detail/:id/status', component: OrderStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
