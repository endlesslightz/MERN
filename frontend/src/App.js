import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homez from './pages/Home'
import Navbarz from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarz />
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Homez />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
