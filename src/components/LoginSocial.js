import React, { Component, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import AppRouter from './AppRouter';
// MATERIAL UI IMPORTS
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {


    const [isAuthenticated, setAuthentificated] = useState(false);
    const [userID, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');
    const [userDetails, setUserDetails] = useState('');

   const  responseFacebook = response => {
        console.log(response);
        setAuthentificated(true);
        setUserId(response.user);
        setName(response.name);
        setEmail(response.email);
        setPicture(response.picture.data.url);
    }

   const responseGoogle = response => {
        console.log(response);
        setUserDetails(response.profileObj);
        setAuthentificated(true);
    }

   const componentClicked = () => console.log('clicked ');
   const classes = useStyles();

    if( isAuthenticated) {
        return <div>
                    <AppRouter />
                    <p>Authenticated</p>
                    <div >
                        <img src={picture}  alt={name} />
                        <img src={userDetails.imageUrl} alt={userDetails.name} />
                        <h2>Welcome {name} {userDetails.name}</h2>
                        Email: {email} {userDetails.email}
                    </div>
                </div>;
    }

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
                <Grid item style={{width: '100%'}}>
                    <FacebookLogin
                    appId="559530038229367"
                    buttonText="Login with Facebook"
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    // autoLoad={true}
                    cssClass="loginBtn loginBtn--facebook"/>
                </Grid>

                <Grid item style={{width: '100%'}}>
                    <GoogleLogin
                        className="loginBtn loginBtn--google"
                        clientId="1048522197511-hf2lgtvb9m2fi1r90ifki27ii28ablf6.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onClick = {componentClicked}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}/>
                </Grid>
            </Grid>
        <Box mt={5}>
        <Copyright />
        </Box>
    </div>
</Grid>
</Grid>
);
}