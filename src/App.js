import React from 'react';
import SignIn from './components/SignIn';
import styled from 'styled-components';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
import SignUp  from './components/Register';

const StyledApp = styled.div`
  height: auto;
`;

const NavBar = styled.nav` 
  height: 60px;
  width: auto;
  background-color: #3F51B5;
  box-shadow: 5px;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  div {
    
    margin: 10px;
    padding: 10px;

    a {
      color: white;
      text-decoration: none;
    }
  }

`;

function App() {
  return (
    <Router>
      <StyledApp>
      <NavBar>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
        </NavBar>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
          <SignUp />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
