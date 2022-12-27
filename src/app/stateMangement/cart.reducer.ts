import { createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.action';
import { initialState } from './cart.state';

const cartAndBuyNowReducer = createReducer(
  initialState,
  on(addToCart, (state: any) => {
    return {
      ...state,
      cart: [...state.cart],
    };
  })
);

export function counterReducer(state: any, action: any) {
  return cartAndBuyNowReducer(state, action);
}
