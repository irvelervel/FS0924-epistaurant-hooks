import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const NotFound = function () {
  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6}>
          <Alert variant="warning" className="text-center">
            <h3>404 - Not Found</h3>
            <p>
              Ti sei perso? Clicca <Button variant="primary">QUI</Button> per
              tornare in homepage!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
