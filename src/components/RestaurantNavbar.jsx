// creo un componente React per la navbar del mio ristorante
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

// REGOLE DEGLI HOOKS
// 1) solo nei componenti a funzione
// 2) prima del return, fuori da if/for/funzioni

// i valori delle prop vanno tra doppi apici se sono stringhe, o tra { }
// in ogni altro caso

const RestaurantNavbar = function () {
  const location = useLocation()
  console.log('LOCATION OBJECT', location)

  // location.pathname ci riporterà il PERCORSO CORRENTE
  // posso utilizzarlo per capire se mi trovo in /, /prenota, /admin etc.
  // sulla base di questa conoscenza, io posso illuminare il link corretto!

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Link to="/" className="navbar-brand">
          Epistaurant
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/menu"
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </Link>
            <Link
              to="/prenota"
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Prenota
            </Link>
            <Link
              to="/admin"
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
            >
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RestaurantNavbar
