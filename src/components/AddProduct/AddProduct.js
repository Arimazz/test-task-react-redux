import React, { useState } from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewProduct } from '../../store';

const AddProductContainer = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setimgUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImgUrl = (e) => {
    setimgUrl(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  // eslint-disable-next-line max-len
  const notFoundImg = 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png';

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      id: uuidv4(),
      name: name.length === 0 ? 'Product name' : name,
      description: description.length === 0 ? 'Decription' : description,
      imgUrl: imgUrl.length === 0 ? notFoundImg : imgUrl,
      price: price.length === 0 ? 'Price $' : price,
      isPinned: false,
    });
    setName('');
    setDescription('');
    setimgUrl('');
    setPrice('');
  };

  return (
    <div className="add-product-wrapper">
      <h2>
        Add Product
      </h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group add-product-form-group">
          <div className="input-container">
            <label htmlFor="form-name">
              Name
            </label>
            <input
              value={name}
              onChange={handleName}
              type="text"
              name="name"
              id="form-name"
              autoComplete="off"
              className="form-control"
              placeholder="Product name"
            />
          </div>

          <div className="input-container">
            <label htmlFor="form-name">
              Description
            </label>
            <input
              value={description}
              onChange={handleDescription}
              type="text"
              id="form-name"
              autoComplete="off"
              name="description"
              className="form-control"
              placeholder="Product description"
            />
          </div>

          <div className="input-container">
            <label htmlFor="form-name">
              Image URL
            </label>
            <input
              value={imgUrl}
              onChange={handleImgUrl}
              type="text"
              id="form-name"
              name="image-url"
              className="form-control"
              autoComplete="off"
              placeholder="Img URL (Not Required)"
            />
          </div>

          <div className="input-container">
            <label htmlFor="form-name">
              Price
            </label>
            <input
              value={price}
              onChange={handlePrice}
              type="text"
              name="price"
              id="form-name"
              className="form-control"
              autoComplete="off"
              placeholder="Product Price"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary add-product-btn"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

AddProductContainer.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

const dispatchToProps = dispatch => ({
  addProduct: newProduct => dispatch(addNewProduct(newProduct)),
});

export const AddProduct = connect(null, dispatchToProps)(AddProductContainer);
