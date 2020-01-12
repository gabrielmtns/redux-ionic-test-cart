import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProductsPage } from './base/products.page';
import { HeaderBaseComponent } from '../../shared/header-base/header-base.component';
import { ProductBoxComponent } from '../../shared/product-box/product-box.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsPage
      }
    ])
  ],
  declarations: [ProductsPage, HeaderBaseComponent, ProductBoxComponent]
})
export class ProductsPageModule {}
