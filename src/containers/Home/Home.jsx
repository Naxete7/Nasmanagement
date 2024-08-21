import React from "react";
import "./Home.css"
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import broja from "../../assets/img/broja.png"
import Nplumaroja from "../../assets/img/Nplumaroja.png";
import logonegro from "../../assets/img/logonegro.png";

function OrderingExample() {
  return (
    <Container className="HomeDesign">
      <Row className="rowDesign">
        <Col>
          <img className="imgDesign" src={broja} />
        </Col>
        <Col>
          <img className="imgDesign" src={Nplumaroja} />
        </Col>
        <Col>
          {" "}
          <img className="imgDesign" src={logonegro} />
        </Col>
      </Row>
    </Container>
  );
}

export default OrderingExample;