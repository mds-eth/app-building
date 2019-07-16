import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './Components/Index';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Index} />
            {/* <Route path='*' exact={true} component={} /> */}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

