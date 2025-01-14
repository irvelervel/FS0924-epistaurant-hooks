import { Row, Col, ListGroup } from 'react-bootstrap'

// PastaComments riceve una prop da HomeContent, ovvero la pasta attualmente visualizzata! Questa prop, passata da HomeContent, l'abbiamo chiamata "pasta"

const PastaComments = function (props) {
  // props.pasta è l'oggetto della pasta attualmente visualizzata!
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <ListGroup className="text-center">
          {props.pasta.comments.map((r) => {
            return <ListGroup.Item key={r.id}>{r.comment}</ListGroup.Item>
          })}
        </ListGroup>
      </Col>
    </Row>
  )
}

export default PastaComments
