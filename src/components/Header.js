import React from 'react';
import {NavLink} from 'react-router-dom';
// import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const Header = () => (
    <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy color="inherit">
                Smart Receipt
            </TypoGraphy>
            <List component="nav">

            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit">
                    <NavLink to="/" activeClassName="is-active" exact={true} color="inherit">Home</NavLink>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" >
                    <NavLink to="/portfolio" activeClassName="is-active" exact={true} color="inherit">Portfolio</NavLink>
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit">
                    <NavLink to="/contact" activeClassName="is-active" color="inherit">Contact</NavLink>
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" >
                    <NavLink to="/dashboard" activeClassName="is-active" color="inherit">Dashboard</NavLink>
               </TypoGraphy>
                </ListItemText>
            </ListItem>

        </List>
        </Toolbar>


    </AppBar>
);

export default Header;
