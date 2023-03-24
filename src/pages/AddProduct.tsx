import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/actions/productActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  year: Yup.number().required('Required'),
  rating: Yup.number().required('Required').min(0, 'Must be greater than or equal to 0').max(5, 'Must be less than or equal to 5'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  photo: Yup.string().required('Required'),
  stock: Yup.string().required('Required'),
  category: Yup.string().required('Required')
});

const AddProduct = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      author: '',
      year: '',
      rating: '',
      description: '',
      price: '',
      photo: '',
      stock: '',
      category: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addProduct({ ...values, id: Date.now() }));
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" onChange={formik.handleChange} value={formik.values.name}
          isInvalid={!!(formik.touched.name && formik.errors.name)} />
        {formik.touched.name && formik.errors.name ? <Form.Text className="text-danger">{formik.errors.name}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="author">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" name="author" onChange={formik.handleChange} value={formik.values.author}
          isInvalid={!!(formik.touched.author && formik.errors.author)} />
        {formik.touched.author && formik.errors.author ? <Form.Text className="text-danger">{formik.errors.author}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>Year of Publication:</Form.Label>
        <Form.Control type="number" name="year" onChange={formik.handleChange} value={formik.values.year}
          isInvalid={!!(formik.touched.year && formik.errors.year)} />
        {formik.touched.year && formik.errors.year ? <Form.Text className="text-danger">{formik.errors.year}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="rating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="number" name="rating" onChange={formik.handleChange} value={formik.values.rating}
          isInvalid={!!(formik.touched.rating && formik.errors.rating)} />
        {formik.touched.rating && formik.errors.rating ? <Form.Text className="text-danger">{formik.errors.rating}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="photo">
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control type="text" name="photo" onChange={formik.handleChange} value={formik.values.photo}
          isInvalid={!!(formik.touched.stock && formik.errors.photo)} />
        {formik.touched.photo && formik.errors.photo ? <Form.Text className="text-danger">{formik.errors.photo}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="stock">
        <Form.Label>Stock:</Form.Label>
        <Form.Control type="text" name="stock" onChange={formik.handleChange} value={formik.values.stock}
          isInvalid={!!(formik.touched.stock && formik.errors.stock)} />
        {formik.touched.stock && formik.errors.stock ? <Form.Text className="text-danger">{formik.errors.stock}</Form.Text> : null}
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category:</Form.Label>
        <Form.Select name="category" onChange={formik.handleChange} value={formik.values.category}
          isInvalid={!!(formik.touched.category && formik.errors.category)}>
          <option value="">Select a category</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </Form.Select>
        {formik.touched.category && formik.errors.category ? (
          <Form.Text className="text-danger">{formik.errors.category}</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control
          type="number"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
          isInvalid={!!(formik.touched.price && formik.errors.price)}
        />
        {formik.touched.price && formik.errors.price ? (
          <Form.Text className="text-danger">{formik.errors.price}</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" name="description" onChange={formik.handleChange} value={formik.values.description}
          isInvalid={!!(formik.touched.description && formik.errors.description)} />
        {formik.touched.description && formik.errors.description ? <Form.Text className="text-danger">{formik.errors.description}</Form.Text> : null}
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>Add Product</Button>
      </div>
    </Form>
  );
};

export default AddProduct;