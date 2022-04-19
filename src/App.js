import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";


import "./App.scss";
import MasterForm from "./components/MasterForm";



const App = () => {

  return (
    <div className="App">
      <Helmet>

      </Helmet>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12">       
            <Row>
              <Col xs="12" sm="12" md="12" lg={{offset : 4 , size: 5}} className="justify-content-center">
                <MasterForm />
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default App;

