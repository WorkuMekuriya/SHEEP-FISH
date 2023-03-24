import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from './constants';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  rating: number;
  stock: number;
  category: string;
}

export interface ProductState {
  products: Product[];
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: number; // the id of the product to be removed
}

interface UpdateProductAction {
  type: typeof UPDATE_PRODUCT;
  payload: Product;
}

export type ProductActionTypes = AddProductAction | RemoveProductAction | UpdateProductAction;

const initialState: ProductState = {
  products: [],
};

const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_PRODUCT:
      return { ...state, products: state.products.filter((product) => product.id !== action.payload) };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, ...action.payload };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
