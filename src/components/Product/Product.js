import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pinProduct, deleteProduct } from '../../store';

const ProductContainer = (props) => {
  const {
    id,
    name,
    price,
    imgUrl,
    isPinned,
    description,
    deleteProductById,
    pinProductById,
  } = props;

  const handlePinProduct = (idx) => {
    pinProductById(idx);
  };

  const handleDeleteProduct = (idx) => {
    deleteProductById(idx);
  };

  return (
    <div className="card">
      <img
        src={imgUrl}
        className="card-img-top"
        alt="product"
      />
      <div className="card-body">
        <h4 className="card-title">
          <span>{name}</span>
          {isPinned ? <p>Pinned</p> : null}
        </h4>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <button
          onClick={() => handlePinProduct(id)}
          type="button"
          className="btn btn-primary"
        >
          Pin Product
        </button>
        <button
          onClick={() => handleDeleteProduct(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ProductContainer.propTypes = {
  isPinned: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  deleteProductById: PropTypes.func.isRequired,
  pinProductById: PropTypes.func.isRequired,
};

const dispatchToProps = dispatch => ({
  deleteProductById: id => dispatch(deleteProduct(id)),
  pinProductById: id => dispatch(pinProduct(id)),
});

export const Product = connect(null, dispatchToProps)(ProductContainer);
