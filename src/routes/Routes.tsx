import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Home';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
