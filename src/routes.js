import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './pages/Menu/index';
import Instructions from './pages/Instructions/index';
import Game from './pages/Game/index';
import About from './pages/About/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/instructions" component={Instructions} />
                <Route path="/game" component={Game} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}