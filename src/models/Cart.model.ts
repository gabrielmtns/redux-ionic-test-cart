import { Product } from './Product.model';

export class Cart{
  public products : Product[] = [];
  public priceTotal : number =  0;
}