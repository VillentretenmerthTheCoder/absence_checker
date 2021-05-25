import React from 'react';
import LoginPage from './Pages/LoginPage';
import './App.css';
import MainPageStudent from './Pages/Students/MainPageStudent';
import { Route, Switch, RouteComponentProps, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import SubmitCodeStudent from './Pages/Students/SubmitCodeStudent';
import MainPageAdmin from './Pages/Admins/MainPageAdmin';
import MainPageTeachers from './Pages/Teachers/MainPageTeachers';
import CreateStudents from './Pages/Admins/CreateStudents';
import CreateTeachers from './Pages/Admins/CreateTeachers';
import CreateCourse from './Pages/Admins/CreateCourse';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
          <Route path="/login" component={LoginPage}/>
          <Route path="/student-main" component={MainPageStudent}/>
          <Route path="/student-submit" component={SubmitCodeStudent}/>
          <Route path="/admin-main" component={MainPageAdmin}/>
          <Route path="/admin/create-students" component={CreateStudents}/>
          <Route path="/admin/create-teachers" component={CreateTeachers}/>
          <Route path="/admin/create-courses" component={CreateCourse}/>

          <Route path="/teacher-main" component={MainPageTeachers}/>


        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
