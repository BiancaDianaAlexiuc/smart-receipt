import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import HomePage from './homepage/Home';
import ContactPage from './ContactPage';
import Dashboard from './dashboard/DashboardPage';
import ReceiptsPage from './ReceiptsPage';
import AuthApi from './AuthApi';

const AppRouter = () => {
    const Auth = React.useContext(AuthApi);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} exact={true} auth={Auth.auth} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/receipts" component={ReceiptsPage} />
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
            <Redirect to="/home"/>
        )
        }
        />
    )
}


export default AppRouter;