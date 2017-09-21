import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from 'src/containers/app';
import Accounts from 'src/containers/accounts';

export default function () {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/accounts">Accounts</Link>
        </div>

        <Route exact path="/" component={App} />
        <Route exact path="/accounts" component={Accounts} />
      </div>
    </BrowserRouter>
  );
}
