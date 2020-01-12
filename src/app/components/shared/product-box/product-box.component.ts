import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Cart } from 'src/models/Cart.model';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Add } from 'src/app/actions-redux/cart.action';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit {
  
  @Input()
  product : Product

  constructor(
    private store : Store<{ cart: Cart }>,
    private toastCtrl : ToastController
  ) { 
    
  }

  ngOnInit() {}

  async addProductToCart(product : Product){
    this.store.dispatch(Add(product));
    const messagePopUp = await this.toastCtrl.create({
      message: `${product.title} has been add to cart`,
      duration: 3000,
      showCloseButton : true,
      closeButtonText : "Ok!"
    })
    messagePopUp.present();
  }

}
