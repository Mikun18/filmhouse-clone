import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './homepage';
import Subscribe from './subscribe';
import Navbar from './navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/' element={<Navbar/>}>
          <Route path='subscribe' element={<Subscribe />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
