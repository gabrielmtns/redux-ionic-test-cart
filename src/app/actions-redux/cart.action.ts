import { createAction, props } from '@ngrx/store';
import { Product } from 'src/models/Product.model';

export enum CartAction{
  add =  'add',
  remove = 'rem',
  clear = 'cle'
}

export const Add = createAction(
  CartAction.add,
  props<Product>()
)

export const Remove = createAction(
  CartAction.remove, 
  props<Product>()
)

export const Clear = createAction(
  CartAction.clear
)

 