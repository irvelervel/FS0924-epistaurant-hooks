import RestaurantNavbar from './components/RestaurantNavbar'
import HomeContent from './components/HomeContent'

// tolgo questo import CSS perchè utilizzeremo bootstrap
// import './App.css'
// importiamo una volta per tutte il CSS di bootstrap, da node_modules
import 'bootstrap/dist/css/bootstrap.min.css'
import ReservationForm from './components/ReservationForm'
import AdminSection from './components/AdminSection'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

function App() {
  const [updateReservations, setUpdateReservations] = useState(0)

  return (
    <BrowserRouter>
      <RestaurantNavbar />
      {/* Routes è un componente che delimita le parti DINAMICHE da 
      montare/smontare a seconda dell'URL in cui ci troviamo */}
      {/* di conseguenza, NON inserisco la RestaurantNavbar nel mio
      componente Routes */}

      <Routes>
        {/* dentro Routes ci possono andare SOLAMENTE dei <Route> */}
        <Route path="/" element={<HomeContent />} />
        <Route
          path="/admin"
          element={<AdminSection updateReservations={updateReservations} />}
        />
        <Route
          path="/prenota"
          element={
            <ReservationForm setUpdateReservations={setUpdateReservations} />
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:pastaId" element={<PastaDetails />} />
        {/* es. /details/0 */}
        {/* es. /details/50 */}
        {/* es. /details/stefano */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* idealmente qui andrebbe un Footer, sempre fuori da Routes */}
    </BrowserRouter>
  )
}

export default App
