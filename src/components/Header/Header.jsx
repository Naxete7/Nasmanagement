import React from "react";
import "./Header.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import { Col, Row } from "react-bootstrap";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary navbarDesign sticky-top">
        <Container className="sticky-top">
          <Navbar.Brand href="#home">
            <Container>
              <Row className="rowDesign sticky-top">
                <img
                  alt=""
                  src={logo}
                  className="d-inline-block align-top logoDesign"
                />{" "}
                <Col>PortFolio</Col>
                <Col>PortFolio</Col>
                <Col>PortFolio</Col>
              </Row>
            </Container>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;