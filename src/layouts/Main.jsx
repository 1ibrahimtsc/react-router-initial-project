import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="text-center">Banglaedesh !</div>
          </Col>
          <Col lg={6}>
            <div className="text-center">Banglaedesh !</div>
          </Col>
          <Col lg={3}>
            <div className="text-center">Banglaedesh !</div>
          </Col>
          <Outlet></Outlet>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
