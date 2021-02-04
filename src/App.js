import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from "./Pages/Navbar";
import ProtectedRoute from "./Component/ProtectedRoute";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Select from "./Pages/Select";
import Data from "./Pages/Data";
import Profile from "./Pages/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowLeft, faKey, faUserCircle, faHome, faChevronRight, faBan, faPenSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </Route>
          <Route exact path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route exact path="/data">
            <Navbar>
              <Data />
            </Navbar>
          </Route>
          <Route exact path="/profile">
            <Navbar>
              <Profile />
            </Navbar>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/select" component={Select} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
