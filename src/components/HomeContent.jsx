import { Carousel, Container, Row, Col } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { useState } from 'react'
// pastasciutte è un array di oggetti!
import PastaComments from './PastaComments'

// ho bisogno di uno stato per memorizzare nel componente quale sia
// la PASTA ATTIVA
// per avere un oggetto di stato, ho bisogno di un componente a CLASSE

const HomeContent = function () {
  // state = {
  //   activePasta: pastasciutte[0], // oggetto della pasta carbonara
  // }
  // state è sempre un oggetto!

  const [activePasta, setActivePasta] = useState(pastasciutte[0])

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        {/* colonna con classi settate "a mano" */}
        {/* <Col className="col-12 col-md-6 col-lg-4"> */}
        <Col xs={12} md={6}>
          <Carousel
            onSlide={(nextSlideIndex) => {
              // console.log('SLIDE CAMBIATA!', nextSlideIndex)
              // pastasciutte[i] è la nuova pasta che deve prendere il posto
              // della corrente activePasta

              setActivePasta(pastasciutte[nextSlideIndex])
            }}
          >
            {/* in React .map si usa per generare dinamicamente del contenuto */}
            {pastasciutte.map((pasta) => {
              // quante volte entro qui dentro?
              // entro 5 volte!
              return (
                // la key va inserita obbligatoriamente nell'elemento ritornato
                // dal map, deve essere un valore univoco per ogni elemento
                // generato!
                <Carousel.Item key={pasta.id}>
                  <img src={pasta.image} className="w-100" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>

      {/* rimetto qui sotto la sezione dei commenti, l'ho esportata
              in un componente a parte che ho chiamato PastaComments */}

      {/* la pasta attualmente visualizzata è salvata nello stato, in particolare sotto "this.state.activePasta" */}

      {/* ora fornirò a PastaComments quale sia la pasta attiva,
          in modo che ne possa mappare le recensioni */}

      <PastaComments pasta={activePasta} />
      {/* PastaComments è un componente che richiede una pastasciutta
        e ne mostra sostanzialmente le recensioni */}
    </Container>
  )
}

export default HomeContent
