import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';


//imports
import HompePage from './views/HomePage';
import PlaylistPage from './views/PlaylistPage';
import NavBar from './cmp/NavBar';

import "./assets/scss/global.scss";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>

      <NavBar />
      <Switch>
        <Route path="/playlist" component={PlaylistPage} />
        <Route path="/" component={HompePage} />
      </Switch>

    </Router>
  );
}

export default App;
