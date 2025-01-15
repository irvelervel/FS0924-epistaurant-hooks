import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { useNavigate } from 'react-router-dom'

const Menu = function () {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {pastasciutte.map((pasta) => {
            return (
              <Card key={pasta.id} className="my-2">
                <Card.Img variant="top" src={pasta.image} />
                <Card.Body>
                  <Card.Title>{pasta.name}</Card.Title>
                  <Card.Text>{pasta.description}</Card.Text>
                  <Card.Text>{pasta.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/details/' + pasta.id)}
                    // es. /details/0
                    // es. /details/1
                    // es. /details/2
                  >
                    Vai ai dettagli
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Menu
