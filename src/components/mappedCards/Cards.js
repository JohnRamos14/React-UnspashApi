import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./cardsStyles.css";

const Cards = (props) => {
  let image = props.card.urls.regular;
  return (
    <>
      <Col lg={3} md={4} sm={6} className="d-flex align-items-stretch">
        <div>
          <Card.Img variant="top" src={image} className="img" />
        </div>
      </Col>
    </>
  );
};

export default React.memo(Cards);
