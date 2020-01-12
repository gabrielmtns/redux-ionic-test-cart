import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/models/Cart.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.scss'],
})
export class HeaderBaseComponent  {

  cart$ : Observable<Cart>;
  
  constructor(
    private store : Store<{ cart: Cart} >
  ) {
    console.log("Header ok!")
    this.cart$ = store.pipe(select("cart"));
  }

}
