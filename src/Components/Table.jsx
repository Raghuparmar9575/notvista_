import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Grid(props) {
  return (
    <Container className="row justify-content-center">
      <Row className=" mt-2  justify-content-center mt-3">
        <Col xs={7} md={7}>
          <h4>
            {props.text} <span className="span-text"> {props.span}</span>
          </h4>
        </Col>
        <Col xs={5} md={5}>
          <h4>{props.col}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
