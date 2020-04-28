export const addNewProduct = newObject => ({
  type: 'ADD_PRODUCT',
  payload: newObject,
});

export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  payload: id,
});

export const pinProduct = id => ({
  type: 'PIN_PRODUCT',
  payload: id,
});
