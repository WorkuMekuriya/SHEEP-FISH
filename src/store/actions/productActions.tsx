import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../constants';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const editProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
