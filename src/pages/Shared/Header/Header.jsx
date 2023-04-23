import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="text-center">Header Part</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
