import './App.css';
import HotelCard from './Components/HotelCard';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Hotels from './Components/Hotels';

import CheckOut from './Components/CheckOut';
import Info from './Components/Info';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hotels/>}/>
        <Route path='/hotelCard/:id' element={<HotelCard/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/Info/' element={<Info/>}></Route>

      </Routes>
    </BrowserRouter> 

    {/* <CheckOut/> */}
    </>
  );
}

export default App;
