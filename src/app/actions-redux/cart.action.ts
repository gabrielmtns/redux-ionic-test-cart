import { Action } from '@ngrx/store';
import { Product } from 'src/models/Product.model';
import { Cart } from 'src/models/Cart.model';
import { ActionModel } from 'src/models/Action.model';

export enum CartAction{
  add =  'add',
  remove = 'rem',
  clear = 'cle'
}

export const Add = ( product : Product) => {
  return <ActionModel<Product>>{ type: CartAction.add, payload: product}
}

export const Remove = (product : Product) => {
  return <ActionModel<Product>>{type: CartAction.remove, payload : product}
}

export const Clear = () => {
  return <ActionModel<Product>>{type: CartAction.clear, payload : null}
}