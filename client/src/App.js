import React from 'react';
import { Switch, Route } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';

// components
import NavBarHome from './components/navBarHome.component';
import Home from './pages/home';

function App() {
  return (
      <div>
        <NavBarHome />


        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
