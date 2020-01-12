import { Cart } from 'src/models/Cart.model';
import { ActionModel } from 'src/models/Action.model';
import { CartAction } from '../actions-redux/cart.action';
import { Product } from 'src/models/Product.model';


export const myCart = new Cart();

export function cartReducer(state = myCart, action: ActionModel<Product>){
  switch(action.type){
    case CartAction.add:{
      state.products.push(action.payload)
      state.priceTotal = calculatePrice(state.products);
      console.log("Add state >> " , state);
      return state
    };
    case CartAction.remove:{
      const index = state.products.indexOf(action.payload);
      state.products.splice(index, 1);
      state.priceTotal = calculatePrice(state.products);
      console.log("Remove state >>> ", state);
      return state;
    };
    case CartAction.clear:{
      state.products = [];
      state.priceTotal = calculatePrice(state.products);
      console.log("Clear state >> ", state);
      return state;
    }

    default:
        return state;

  }
}

function calculatePrice( products : Product[]) : number {
  const total = 
  products
  .map( product => product.price)
  .reduce( (currentPrice, product ) => {
    return currentPrice + product
  })
  
  console.log(total)
  return total;
}