// Code Victor is Here
import { HashRouter, Routes, Route } from 'react-router-dom'
import Homepage from './homepage';
import Subscribe from './subscribe';
import Navbar from './navbar';
import Food from './food';
import Bookings from './bookings';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/' element={<Navbar/>}>
            <Route path='subscribe' element={<Subscribe />}/>
            <Route path='food' element={<Food />} />
            <Route path='bookings' element={<Bookings />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
