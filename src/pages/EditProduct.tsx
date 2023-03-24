import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../store/actions/productActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditProduct = ({ product, onHide }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [photo, setPhoto] = useState(product.photo);
  const [rating, setRating] = useState(product.rating);
  const [stock, setStock] = useState(product.stock);
  const [category, setCategory] = useState(product.category);
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name,
      description,
      price,
      photo,
      rating,
      stock,
      category,
    };
    dispatch(editProduct(updatedProduct));
    onHide();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="photo">
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="rating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="stock">
        <Form.Label>Stock:</Form.Label>
        <Form.Control type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category:</Form.Label>
        <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button>{' '}
      <Button variant="secondary" onClick={onHide}>Cancel</Button>
    </Form>
  );
};

export default EditProduct;