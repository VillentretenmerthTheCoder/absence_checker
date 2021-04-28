import React from 'react';
import LoginPage from './Pages/LoginPage';
import './App.css';
import MainPageStudent from './Pages/Students/MainPageStudent';
import { Route, Switch, RouteComponentProps, withRouter, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/student-main">
            <MainPageStudent/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
