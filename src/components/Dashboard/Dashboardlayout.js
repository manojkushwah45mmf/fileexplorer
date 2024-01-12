import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ViewFilecomponent from "./ViewFile/ViewFilecomponent";

const Dashboardlayout = () => {
  return (
    <div>
      <div className="dblayout">
        <Sidebar />
        <div className="side_wrapper">
          <Container fluid>
            <Row>
              <Col>
                <Route
                  exact
                  path="/web-dashboard"
                  component={ViewFilecomponent}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
