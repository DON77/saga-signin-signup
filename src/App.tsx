import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
