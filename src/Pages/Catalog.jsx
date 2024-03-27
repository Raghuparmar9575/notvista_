import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const CatalogPage = () => {
  // State for filters
  const [filter, setFilter] = useState("");

  // Dummy data for images/cards
  const images = [
    {
      id: 1,
      imageUrl: "images/Java.jpg",
      title: "Roshan damor",
      discount: 10,
    },
    { id: 2, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 10 },
    { id: 3, imageUrl: "images/Java.jpg", title: "Ram ", discount: 20 },
    { id: 4, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 20 },
    { id: 5, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 20 },
    { id: 6, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 20 },
    { id: 7, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 20 },
    { id: 8, imageUrl: "images/Java.jpg", title: "Roshan damor", discount: 20 },

    // Add more data as needed
  ];

  // Filter function
  const filterImages = () => {
    return images.filter((image) =>
      image.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Filters</h2>
        </Col>
        <Col>
          <p>Home⏩Notes⏩Engineering</p>
          Show 1-20 of 4342 results for Engineering physics
        </Col>
        <Col>
          <button>
            sort by : <strong>Price : High to Low</strong>
          </button>
        </Col>
      </Row>
      <hr />
      <Row>
        {/* Left Side Filters */}
        <Col md={2}>
          <Form>
            <Form.Group controlId="formFilter">
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <Button variant="outline-primary mt-2">Apply Filters</Button>
              <Col className="filter-sec">
                <h2>College</h2>
                <div className="d-flex">
                  <div className="col">
                    <Form.Check inline type="checkbox" label="MANIT BHOPAL" />
                    <Form.Check inline type="checkbox" label="VIT VELLOR" />
                    <Form.Check inline type="checkbox" label="DAVV-IET" />
                    <Form.Check inline type="checkbox" label="IIT KHARGPUR" />
                    <Form.Check inline type="checkbox" label="BITS PILANI" />

                    <p className="text-danger ">+5134 more</p>
                  </div>
                </div>
              </Col>
              <hr />
              <Col className="filter-sec">
                <h2>Discount</h2>
                <div className="d-flex">
                  <div>
                    <Form.Check type="checkbox" label="5% of or more" />
                    <Form.Check type="checkbox" label="15% of or more" />
                    <Form.Check type="checkbox" label="25% of or more" />
                    <Form.Check type="checkbox" label="35% of or more" />
                    <Form.Check type="checkbox" label="55% of or more" />
                    <p className="text-danger ">+3 more</p>
                  </div>
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col md={10}>
          <Row>
            {filterImages().map((image) => (
              <Col key={image.id} md={3}>
                <Card style={{ marginBottom: "20px" }} className="catalog">
                  <Card.Img variant="top" height={200} src={image.imageUrl} />
                  <Card.Body>
                    <Card.Title className="catalog-title">
                      {image.title}
                    </Card.Title>
                    <Card.Text className="catalog-text">
                      <p>1st sem Engineering physics handwriting notes</p>
                      <br />
                      Rs 9 (
                      {image.discount > 0 && (
                        <span className="text-danger">
                          {image.discount}% off
                        </span>
                      )}
                      ){/* Add more details about the product */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogPage;
