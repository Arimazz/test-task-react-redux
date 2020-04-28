/* eslint-disable max-len */
import { createStore } from 'redux';

const initialState = {
  products: [
    {
      id: 'adsfaosdfjasdfasjdfasdf',
      name: 'one',
      description: 'first description',
      imgUrl: 'https://www.pngitem.com/pimgs/m/463-4637744_number-one-navigate-options-comments-clip-art-clock.png',
      price: '700',
      isPinned: false,
    },
    {
      id: 'adsfaosdfjaasdfasdfasdfsadf',
      name: 'two',
      description: 'second description',
      imgUrl: 'https://clipartart.com/images/clipart-two-8.jpg',
      price: '900',
      isPinned: false,
    },
    {
      id: 'adsfaosdfasdfasdfsasadf',
      name: 'three',
      description: 'third description',
      imgUrl: 'https://blognumbers.files.wordpress.com/2010/09/3.jpg',
      price: '200',
      isPinned: false,
    },
    {
      id: 'adsfaosdgadsgdfgfgadf',
      name: 'four',
      description: 'fourth description',
      imgUrl: 'https://номертижня.укр/gfx/200x200/4.png',
      price: '650',
      isPinned: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return ({
        ...state,
        products: [...state.products, action.payload],
      });

    case 'DELETE_PRODUCT':
      return ({
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      });

    case 'PIN_PRODUCT':
      return ({
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return ({
              ...product,
              isPinned: true,
            });
          }

          return ({
            ...product,
            isPinned: false,
          });
        }),
      });

    default:
      return state;
  }
};

export const store = createStore(reducer);
