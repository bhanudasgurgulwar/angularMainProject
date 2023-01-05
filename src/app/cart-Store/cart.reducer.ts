import { createReducer, on } from '@ngrx/store';
import {
  addToBuyNow,
  addToCart,
  clearCart,
  decreCount,
  increCount,
  removeFromCart,
  sumUpTotalAmount,
} from './cart.action';
import { initialState, Product } from './cart.state';

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
  on(sumUpTotalAmount, (state) => {
    let tempAmount = 0;
    for (let i = 0; i < state.cart.length; i++) {
      tempAmount += state.cart[i].subTotal;
    }
    return {
      ...state,
      totalAmount: tempAmount,
    };
  }),
  on(addToCart, (state, action) => {
    const temp = structuredClone(state.cart);

    const found = temp.findIndex((i) => i._id === action.product._id);
    if (found >= 0) {
      alert('already added to cart');
    } else {
      const objClone = structuredClone(action.product);
      objClone.qty = 1;
      objClone.subTotal = objClone.price;
      temp.push(objClone);
    }

    return {
      ...state,
      cart: temp,
    };
  }),
  on(addToBuyNow, (state) => {
    let tempBuy = state.cart.map((i) => {
      return {
        productId: i._id,
        name: i.name,
        price: i.price,
        qty: i.qty,
        subTotal: i.subTotal,
      };
    });
    return {
      ...state,
      buyNow: tempBuy,
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
      ++temp[found].qty;
      temp[found].subTotal = temp[found].qty * temp[found].price;
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
      if (temp[found].qty <= 1) {
        temp.splice(found, 1);
      } else {
        --temp[found].qty;
        temp[found].subTotal = temp[found].qty * temp[found].price;
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
