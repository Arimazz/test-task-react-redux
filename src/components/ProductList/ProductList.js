import React, { useState } from 'react';
import './style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Product } from '../Product';

const ProductListContainer = ({ products }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const productsShown = (
    searchInput.length === 0
      ? products
      : products.filter(product => product.name.includes(searchInput)
      || product.description.includes(searchInput)));

  const pinnedItem = products.find(product => product.isPinned === true);

  return (
    <div className="product-list-wrapper">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            value={searchInput}
            onChange={handleSearchInput}
            type="text"
            name="search"
            id="search"
            className="form-control"
          />
        </div>
      </form>

      <h3>Product List</h3>
      <div className="product-list">
        {pinnedItem ? (
          <Product
            key={pinnedItem.id}
            id={pinnedItem.id}
            name={pinnedItem.name}
            description={pinnedItem.description}
            price={pinnedItem.price}
            isPinned={pinnedItem.isPinned}
            imgUrl={pinnedItem.imgUrl}
          />
        ) : (null)}
        {productsShown
          .filter(product => product.isPinned === false)
          .map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              isPinned={product.isPinned}
              imgUrl={product.imgUrl}
            />
          ))}
      </div>
    </div>
  );
};

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string,
    }),
  ).isRequired,
};

const stateToProps = state => ({
  products: state.products,
});

export const ProductList = connect(stateToProps, null)(ProductListContainer);
