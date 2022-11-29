

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Error from './Error';
import About from './about';

function App() {

  return (

    <Router> {/** Parent component for all React Router component such as Route and Link */}
      
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

      <Routes> {/** Wrapper for all route */}
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>

        {/* Catch any other path other than specified path */}
        <Route exact path='/*' element={<Error />}></Route>
      </Routes>
    </Router>

  )
}

export default App;
