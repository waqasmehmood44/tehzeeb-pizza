import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Navbar from './components/Navbar';
import Homescreen from './screens/Honescreen';
import Cartscren from './screens/Cartscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import orderScreens  from './screens/ordersScreen';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscren />} />
          <Route   path="/register" element={<RegisterScreen/>} />
          <Route   path="/login" element={<LoginScreen/>} />
          <Route   path="/order" element={<orderScreens/>} />

        </Routes>



      </Router>



    </div>
  );
}

export default App;
