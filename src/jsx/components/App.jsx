import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Counter from '../containers/Counter';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route path='/counter'><Counter /></Route>
    </Switch>
  </div>
);

export default App;

