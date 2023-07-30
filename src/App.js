import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Weathermain from './Component/Weathermain';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
            <Routes>
               <Route exact path='/' element={
                   <>
                     <Home></Home>
                   </>
               }></Route>
               <Route exact path='/wheater' element={
                <>
                  <Weathermain> </Weathermain>
                </>
            }></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
