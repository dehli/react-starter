import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Aux from 'src/components/aux';
import Header from 'src/components/header';

import Accounts from 'src/containers/accounts';
import Home from 'src/containers/home';

export default function () {
  return (
    <BrowserRouter>
      <Aux>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts" component={Accounts} />
      </Aux>
    </BrowserRouter>
  );
}
