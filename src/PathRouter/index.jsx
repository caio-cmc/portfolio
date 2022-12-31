import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../Pages/About';
import Homepage from '../Pages/Homepage';
import Stacks from '../Pages/Stacks';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

function PathRouter() {
  return (
    <Switch>
      <Route path="/home" component={ Homepage } />
      <Route path="/about" component={ About } />
      <Route path="/stacks" component={ Stacks } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
      <Route exact path="/"><Redirect to="/home"/></Route>
    </Switch>
  );
}

export default PathRouter;
