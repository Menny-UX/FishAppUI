import React from 'react';
import './App.less';
import HomePage from './containers/home/home';
import RegisterPage from './containers/register';
import AdminPage from './containers/admin';
import DescriptivePage from './containers/descriptive';
import SpacialPage from './containers/spacial';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div dir="rtl">
      <Router>
      <Switch>
          <Route path="/spatial">
            <SpacialPage/>
          </Route>
          <Route path="/descriptive">
            <DescriptivePage/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
