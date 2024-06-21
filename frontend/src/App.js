
import './App.css';
//  import { Button } from 'react-bootstrap';
 import Navbars from './Components/Navbar';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
      <Routes>
        < Route exact path='/' element={<Create/>}/>
        < Route exact path='/All' element={<Read/>}/>
        < Route exact path='/update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
