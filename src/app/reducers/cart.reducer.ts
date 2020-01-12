import { Cart } from 'src/models/Cart.model';
import { ActionModel } from 'src/models/Action.model';
import { CartAction, Add, Remove } from '../actions-redux/cart.action';
import { Product } from 'src/models/Product.model';
import { createReducer, on } from '@ngrx/store';


export const myCart = new Cart();

const _cartReducer = createReducer( myCart, 

   on(Add, (state,  newProduct  ) => _cartAdd(state, newProduct ) ),
   on(Remove, (state, product)=> _cartRemove(state, product))

  
  );

const _cartAdd = ( state = myCart , product : Product  ) => {
      state.products.push(product)
      state.priceTotal = _calculatePrice(state.products);
      return state
}

const _cartRemove = (state = myCart, product: Product) => {
      const index = state.products.indexOf(product);
      state.products.splice(index, 1);
      state.priceTotal = _calculatePrice(state.products);
      return state;

}

export function cartReducer(state, action){
  return _cartReducer(state,action)
}

function _calculatePrice( products : Product[]) : number {
  
  let total = 0;

  for (const product of products) {
    total += product.price
  }
  
   return total;
}