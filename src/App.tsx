import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LayoutRoute, AccountLayout, MainLayout } from 'components/Layout';
import { HomePage, LoginPage, JoinPage, MainPage } from 'pages';

export default function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute
                    exact
                    path="/"
                    layout={AccountLayout}
                    component={HomePage}
                />
                <LayoutRoute
                    exact
                    path="/accounts/login"
                    layout={AccountLayout}
                    component={LoginPage}
                />
                <LayoutRoute
                    exact
                    path="/accounts/join"
                    layout={AccountLayout}
                    component={JoinPage}
                />
                <LayoutRoute
                    exact
                    path="/main"
                    layout={MainLayout}
                    component={MainPage}
                />
            </Switch>
        </BrowserRouter>
    );
}
