import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home';




const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </>
  );
}

export default Routes;