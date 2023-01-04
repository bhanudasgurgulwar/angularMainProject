export const initialState: customerState = {
  cart: [],
  buyNow: [],
  totalAmount: 0,
};

export interface customerState {
  cart: Product[];
  buyNow: Product[];
  totalAmount: number;
}

export interface Product {
  price: number;
  _id: string;
  _org: {
    _id: string;
    name: string;
    email: string;
  };
  name: string;
  description: string;
  images: { public_id: string; url: string }[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  qty: number;
  subTotal: number;
}

// vh,mjjghj,gjrandpm comment
