import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'view-product-by-date', component: ViewProductByDateComponent },
  { path: 'category/:id', component: ViewProductByCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
