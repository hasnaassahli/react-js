
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';
export default App;
function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="success">
          <Navbar.Brand href="#home">My React-Bootstrap App</Navbar.Brand>
        </Navbar>
        
        <Container className="mt-4">
          <h1 className="text-center" >Welcome to My App</h1>
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card one</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card tow</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card three</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}




