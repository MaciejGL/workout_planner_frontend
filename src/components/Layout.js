import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Plans from './Plans/Plans';
import CreatePlan from './CreatePlan/Create';
import Account from './Account/Account';
import About from './About/About';

const Layout = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/plans" exact component={Plans} />
          <Route path="/createplan" exact component={CreatePlan} />
          <Route path="/account" exact component={Account} />
          <Route path="/about" exact component={About} />
        </Switch>
      </>
    </Router>
  );
};

export default Layout;
