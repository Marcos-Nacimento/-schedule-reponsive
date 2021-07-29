import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/home';

export function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    );
};