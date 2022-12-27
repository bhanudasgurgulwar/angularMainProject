import { createAction, props } from '@ngrx/store';


  interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
  }

export const addToCart = createAction('addToCart', props<any>);
export const removeFromCart = createAction('removeFromCart');

export const addToBuyNow = createAction('addToBuyNow', props<any>);
export const removeFromBuyNow = createAction('removeFromBuyNow');
