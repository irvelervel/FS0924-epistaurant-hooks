import RestaurantNavbar from './components/RestaurantNavbar'
import HomeContent from './components/HomeContent'

// tolgo questo import CSS perchè utilizzeremo bootstrap
// import './App.css'
// importiamo una volta per tutte il CSS di bootstrap, da node_modules
import 'bootstrap/dist/css/bootstrap.min.css'
import ReservationForm from './components/ReservationForm'
import AdminSection from './components/AdminSection'
import { useState } from 'react'

function App() {
  const [updateReservations, setUpdateReservations] = useState(0)

  return (
    <>
      <RestaurantNavbar />
      <AdminSection updateReservations={updateReservations} />
      <ReservationForm setUpdateReservations={setUpdateReservations} />
      <HomeContent />
    </>
  )
}

export default App
