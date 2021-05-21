import React from 'react';
import LoginPage from './Pages/LoginPage';
import './App.css';
import MainPageStudent from './Pages/Students/MainPageStudent';
import { Route, Switch, RouteComponentProps, withRouter, BrowserRouter } from 'react-router-dom';
import SubmitCodeStudent from './Pages/Students/SubmitCodeStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/student-main" component={MainPageStudent}/>
          <Route path="/student-submit" component={SubmitCodeStudent}/>

        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
