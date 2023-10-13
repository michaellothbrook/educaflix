import React from 'react';
import { Route, Switch } from 'react-router';
import ComoFunciona from '../pages/ComoFunciona';
import Cursos from '../pages/Cursos';
import DuvidasFrequentes from '../pages/DuvidasFrequentes';
import Home from '../pages/Home';
import Matricule from '../pages/Matricule';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/cursos" component={ Cursos } />
      <Route path="/como-funciona" component={ ComoFunciona } />
      <Route path="/duvidas-frequentes" component={ DuvidasFrequentes } />
      <Route path="/matricule-se" component={ Matricule } />
    </Switch>
  );
}

export default Routes;
