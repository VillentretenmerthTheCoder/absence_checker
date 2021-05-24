import React from 'react';
import LoginPage from './Pages/LoginPage';
import './App.css';
import MainPageStudent from './Pages/Students/MainPageStudent';
import { Route, Switch, RouteComponentProps, withRouter, BrowserRouter } from 'react-router-dom';
import SubmitCodeStudent from './Pages/Students/SubmitCodeStudent';
import MainPageAdmin from './Pages/Admins/MainPageAdmin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/student-main" component={MainPageStudent}/>
          <Route path="/student-submit" component={SubmitCodeStudent}/>
          <Route path="/admin-main" component={MainPageAdmin}/>

        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
