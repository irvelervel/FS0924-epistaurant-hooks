import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6}>
          <Alert variant="warning" className="text-center">
            <h3>404 - Not Found</h3>
            <p>
              Ti sei perso? Clicca
              <Button
                variant="primary"
                onClick={() => {
                  // window.location.assign('/') // <-- ricarica il browser :(
                  navigate('/') // <-- modo corretto! senza ricaricare!
                }}
              >
                QUI
              </Button>
              per tornare in homepage!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
