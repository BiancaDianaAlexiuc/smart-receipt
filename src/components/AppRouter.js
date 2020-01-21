import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import Home from './Home';
import ContactPage from './ContactPage';
import Dashboard from './dashboard/DashboardPage';
import AuthApi from './AuthApi';

const AppRouter = () => {
    const Auth = React.useContext(AuthApi);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <ProtectedRoute path="/" component={Home} exact={true} auth={Auth.auth} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route component={NotFoundPage} />

                </Switch>
            </div>
        </BrowserRouter>
    )
};

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={()=>auth? (
            <Component/>
        ):
        (
            <Redirect to="/"/>
        )
        }
        />
    )
}


export default AppRouter;