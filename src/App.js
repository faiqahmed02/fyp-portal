import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './app.scss'
import TextsFieldsInput from './components/Inputs/TextsFieldsInput';
import { Container } from 'react-bootstrap';
import SignUp from './components/login_screens/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/login_screens/Login';
import MainDashbord from './components/main/MainDashbord';
import Student from './components/main/MainComponents/Student';

function App() {
  return (
    <Container fluid className="App" >
      <Router>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/register' Component={SignUp} />
          <Route path='/mainwindow' Component={MainDashbord} />
          <Route path='/mainwindow/:prams' Component={MainDashbord} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
