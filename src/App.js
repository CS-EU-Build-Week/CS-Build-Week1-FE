import React from 'react';
import SignIn from './components/SignIn';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';


const NavBar = styled.nav` 
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  div {
    
    margin: 10px;
    padding: 10px;

    a {
      text-decoration: none;
    }
  }

`;

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
        </NavBar>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
