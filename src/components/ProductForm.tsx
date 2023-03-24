import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

interface FormData {
  name: string;
  description: string;
  price: number;
  photo: string;
  rating: number;
  stock: number;
  category: string;
}

const initialValues: FormData = {
  name: '',
  description: '',
  price: 0,
  photo: '',
  rating: 0,
  stock: 0,
  category: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  photo: Yup.string().required('Required'),
  rating: Yup.number().required('Required'),
  stock: Yup.number().required('Required'),
  category: Yup.string().required('Required')
});

const ProductForm: React.FC = () => {
  const handleSubmit = (values: FormData) => {
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" />
            <ErrorMessage name="description" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field id="price" name="price" type="number" />
            <ErrorMessage name="price" />
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <Field id="photo" name="photo" type="text" />
            <ErrorMessage name="photo" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <Field id="rating" name="rating" type="number" />
            <ErrorMessage name="rating" />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <Field id="stock" name="stock" type="number" />
            <ErrorMessage name="stock" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <Field id="category" name="category" type="text" />
            <ErrorMessage name="category" />
          </div>
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
