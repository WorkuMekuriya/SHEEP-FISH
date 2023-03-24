import React from 'react';
import ProductList from '../components/ProductList';
import AddProduct from '../pages/AddProduct';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col lg={9} md={12}>
          <Card>
            <Card.Header >
              <Card.Title>SHEEP-FISH Product Catalog</Card.Title>
            </Card.Header>
            <Card.Body>
              <ProductList />
            </Card.Body>
            <Card.Footer />
          </Card>
        </Col>
        <Col lg={3} md={12}>
          <Card>
            <Card.Header >
              <Card.Title>Add Product</Card.Title>
            </Card.Header>
            <Card.Body>
              <AddProduct />
            </Card.Body>
            <Card.Footer />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
