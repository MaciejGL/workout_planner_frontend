import React, { useLayoutEffect, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Plans from './Plans/Plans';
import Plan from './Plan/Plan';
import CreatePlan from './CreatePlan/Create';
import Account from './Account/Account';
import About from './About/About';

import { UserContext } from '../store/store';

const mainUrl = 'https://workout-planner-backendv1.herokuapp.com/plans';
// const devUrl = 'http://localhost:8080/plans';
const Layout = () => {
  const { dispatch } = useContext(UserContext);

  useLayoutEffect(() => {
    const fetchIt = async () => {
      const result = await axios.get(mainUrl);
      if (result.data) {
        // console.log(result.data);
        dispatch({ type: 'LOAD_DATA', payload: result.data });
      }
    };
    fetchIt();
  }, [dispatch]);

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/plans" exact component={Plans} />
          <Route path="/plans/:id" exact component={Plan} />
          <Route path="/createplan" exact component={CreatePlan} />
          <Route path="/account" exact component={Account} />
          <Route path="/about" exact component={About} />
        </Switch>
      </>
    </Router>
  );
};

export default Layout;
