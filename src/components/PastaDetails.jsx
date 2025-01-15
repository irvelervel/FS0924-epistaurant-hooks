import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { useEffect, useState } from 'react'
import PastaComments from './PastaComments'
// PastaDetails è un componente che mostrerà i dettagli di una singola pasta
// PastaDetails viene montato su tutte le rotte con /details/qualsiasicosa
// Quel "qualsiasicosa" è stato genericamente nominato "pastaId" nella rotta
// parametrica inserita in App.jsx
// Teoricamente, gli unici link che dovrebbero portare a questo componente sono
// i link creati per la sezione "Menu", che invocherà questo componente
// colpendo una rotta es. /details/0, dove 0 è l'id di una delle paste a menu

// È ora necessario da questo componente PastaDetails RECUPERARE il valore
// di quel parametro, ed utilizzarlo per rintracciare la pasta corretta
// Una volta recuperati i dettagli, costruiremo un'ennesima Card di react-bs
// contenente le informazioni della pasta cliccata

const PastaDetails = function () {
  const params = useParams()
  console.log('PARAMS OBJECT', params)
  // params.pastaId sarà il valore del parametro della rotta
  // il nome l'ho deciso io in App.jsx!
  // ora con il valore di questo parametro (es. 0, 1, 2, 3, 4)
  // recupereremo la pasta corretta da mostrare!

  const [foundPasta, setFoundPasta] = useState({})
  const navigate = useNavigate()

  // la pasta giusta la cerchiamo nell'equivalente del "componentDidMount"
  useEffect(() => {
    // cerchiamo la pasta con id "params.pastaId" nel JSON!
    const result = pastasciutte.find((pasta) => {
      return pasta.id.toString() === params.pastaId // '3' === '3'
    })
    console.log('RESULT', result) // undefined, perchè 3 == '3'
    if (result) {
      setFoundPasta(result)
    } else {
      // caso limite: la pasta cercata non esiste! -> result è undefined
      // rimandiamo l'utente alla pagina NotFound
      navigate('/not-found')
    }
  }, [])

  console.log('RENDER')

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">DETTAGLIO PASTA</h2>
          {/* creo una Card per mostrare la foundPasta */}
          <Card>
            <Card.Img variant="top" src={foundPasta.image} />
            <Card.Body>
              <Card.Title>{foundPasta.name}</Card.Title>
              <Card.Text>{foundPasta.description}</Card.Text>
              <Card.Text>{foundPasta.price}$</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate('/menu')
                }}
              >
                Torna al Menu
              </Button>
            </Card.Body>
          </Card>
          {/* qui sotto, in aggiunta alla card, voglio mostrare
          anche le recensioni della pasta che ho trovato grazie al parametro */}
          {/* avevamo già separato in un componente la sezione delle recensioni,
          l'avevamo chiamato PastaComments. Vado ad importarlo: */}
          {/* al primo render SALTIAMO l'invocazione di PastaComments */}
        </Col>
      </Row>
      {foundPasta.comments && <PastaComments pasta={foundPasta} />}
    </Container>
  )
}

export default PastaDetails
