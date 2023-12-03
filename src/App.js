// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Model from './Mobiles';
import Error from './Error';
import Elcton from './Eelctronics';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='Mobiles' element={<Model />}/>
          <Route path='Eelctronics' element={<Elcton />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
       
    </div>
  );
}

export default App;
