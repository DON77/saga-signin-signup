import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LanguageSwitch from './components/LanguageSwitch';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <Suspense fallback="loading">
    <div className="App">
      <BrowserRouter>
        <LanguageSwitch />
        <Switch>
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </Suspense>
);

export default App;
