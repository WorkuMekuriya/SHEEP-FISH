import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../constants';
import { ProductActionTypes, ProductState } from '../types';

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

export default productReducer;