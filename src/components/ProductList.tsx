import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../store/actions/productActions';
import { FaTrash, FaEdit } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditProduct from '../pages/EditProduct';

const ProductList = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const [product, setProduct]: any = useState(null);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
    handleModal(false)
  };

  const handleEdit = (id) => {
    setEditingProductId(id);
  };

  const handleModal = (product) => {
    setProduct(product);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.stock.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Row>
        <Col xs={12}>
          <Form>
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Photo</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <React.Fragment key={product.id}>
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><img src={product.photo} alt="Placeholder" width={50} height={50} /></td>
                    <td>{product.rating}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>
                      <Button variant="link" className="text-danger" size="lg" onClick={() => handleModal(product)}>
                        <FaTrash />
                      </Button>{' '}
                      <Button variant="link" className="text-primary" size="lg" onClick={() => handleEdit(product.id)}>
                        <FaEdit />
                      </Button>
                    </td>
                  </tr>
                  {editingProductId === product?.id &&
                    <tr>
                      <td colSpan={9}>
                        <EditProduct product={product} onHide={() => setEditingProductId(null)} />
                      </td>
                    </tr>
                  }
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={product} onHide={() => handleRemove(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? You want to remove this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal(null)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleRemove(product?.id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductList;