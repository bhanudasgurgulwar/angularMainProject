import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearCart,
  increCount,
  removeFromCart,
} from './cart.action';
import { initialState } from './cart.state';

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
    const entriesClone: any = state.cart;
    const found = entriesClone.find((i: any) => i._id === action.product._id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  }),
  on(increCount, (state, action) => {
    return {
      ...state,
      cart: [...state.cart, action.product + 1],
    };
  })
);

export function customerReducer(state: any, action: any) {
  return _customerReducer(state, action);
}
