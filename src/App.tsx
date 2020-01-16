import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LayoutRoute, AccountLayout } from 'components/Layout';
import { LoginPage } from 'pages';

export default function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute
                    exact
                    path="/"
                    layout={AccountLayout}
                    component={LoginPage}
                />
            </Switch>
        </BrowserRouter>
    );
}
