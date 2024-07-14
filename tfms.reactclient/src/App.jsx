import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import HomeComponent from './components/HomeComponent';
import './App.css'
import VisitorList from './views/VisitorList';
import VisitorCreateForm from './views/VisitorCreateForm';
import VisitorEditForm from './views/VisitorEditForm';
import BookingList from './views/Bookings/BookingList';
import BookingCreate from './views/Bookings/BookingCreate';
import BookingEdit from './views/Bookings/BookingEdit';
import ExhibitorParkingList from './views/ExhibitorParking/ExhibitorParkingList';
import ExhibitorParkingCreate from './views/ExhibitorParking/ExhibitorParkingCreate';
import ExhibitorParkingEdit from './views/ExhibitorParking/ExhibitorParkingEdit';

function App() {
  return (
      <>
          <NavBarComponent></NavBarComponent>
          <Box sx={{ px: 2, py: 1 }}>
              <Routes>
                  <Route path="/" element={<HomeComponent />} />
                <Route path='/Visitors' element={<VisitorList/>} />
                <Route path='/visitor-create' element={<VisitorCreateForm/>} />
                <Route path='/visitor-edit/:id' element={<VisitorEditForm/>} />
                <Route path='/Bookings' element={<BookingList/>} />
                <Route path='/booking-create' element={<BookingCreate/>} />
                <Route path='/booking-edit/:id' element={<BookingEdit/>} />
                <Route path='/exhibitor-parking' element={<ExhibitorParkingList/>} />
                <Route path='/exhibitor-parking-create' element={<ExhibitorParkingCreate/>} />
                <Route path='/exhibitor-parking-edit/:id' element={<ExhibitorParkingEdit/>} />


              </Routes>
          </Box>
    </>
  )
}
export default App
