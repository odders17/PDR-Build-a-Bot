import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductsCards(props) {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary" onclick={props.handlebutton}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductsCards;

