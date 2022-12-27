import { createAction, props } from '@ngrx/store';
import { products } from './cart.reducer';

//   interface Product {
//     name: string;
//     price: number;
//     description: string;
//     image: string;
//   }

export const addToCart = createAction('addToCart', props<{ product: any }>());
export const removeFromCart = createAction(
  'removeFromCart',
  props<{ product: any }>()
);
export const increCount = createAction('increCount', props<{ product: any }>());
export const decreCount = createAction('decreCount', props<{ product: any }>());

export const clearCart = createAction('clearCart');

export const addToBuyNow = createAction('addToBuyNow', props<any>());
export const removeFromBuyNow = createAction('removeFromBuyNow');
