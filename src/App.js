import { HashRouter, Routes, Route } from 'react-router-dom'
import Homepage from './homepage';
import Subscribe from './subscribe';
import Navbar from './navbar';
import Food from './food';
import Bookings from './bookings';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Homepage />} />
          <Route path='subscribe' element={<Subscribe />}/>
          <Route path='food' element={<Food />} />
          <Route path='bookings' element={<Bookings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
