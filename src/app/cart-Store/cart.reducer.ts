import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearCart,
  decreCount,
  increCount,
  removeFromCart,
} from './cart.action';
import { initialState, Product } from './cart.state';

// const cartAndBuyNowReducer = createReducer(
//   initialState,
//   on(addToCart, (state: any) => {
//     return {
//       ...state,
//       cart: [...state.cart, {}],
//     };
//   })
// );

// export function counterReducer(state: any, action: any) {
//   return cartAndBuyNowReducer(state, action);
// }

export interface products {
  id: string;
  name: string;
  img: string;
  description: string;
  price: string;
}

// export const initialCartState: products[] = [];

export const _customerReducer = createReducer(
  initialState,
  on(clearCart, (_) => {
    return {
      ..._,
      cart: [],
    };
  }),
  on(addToCart, (state, action) => {
    return {
      ...state,
      cart: [...state.cart, action.product],
    };
  }),
  on(removeFromCart, (state, action) => {
    const entriesClone = structuredClone(state.cart);
    const found = entriesClone.find((i) => {
      return i._id === action.product._id;
    });
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return {
      ...state,
      cart: entriesClone,
    };
  }),
  on(increCount, (state, action) => {
    const temp = structuredClone(state.cart);

    const found = temp.findIndex((i) => i._id == action.product._id);
    if (found > -1) {
      console.log(++temp[found].count);
    }
    return {
      ...state,
      cart: temp,
    };
  }),
  on(decreCount, (state, action) => {
    const temp = structuredClone(state.cart);


    const found = temp.findIndex((i) => i._id == action.product._id);
    
    if (found > -1) {
      if(temp[found].count<=1){
        temp.splice(found,1)
      }
      else{
        --temp[found].count;
      }
    }
    return {
      ...state,
      cart: temp,
    };
  })
);

export function customerReducer(state: any, action: any) {
  return _customerReducer(state, action);
}
