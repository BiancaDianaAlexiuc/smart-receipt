import React, { Component } from 'react';
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
  paper: {
    marginTop: theme.spacing(8),
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



export default class LoginSocial extends Component {

    state = {
        isAuthenticated: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        userDetails: {},
    }

    responseFacebook = response => {
        console.log(response);
        this.setState({
        isAuthenticated: true,
        userID: response.user,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }

    responseGoogle = response => {
        console.log(response);
        this.setState({
            userDetails: response.profileObj,
            isAuthenticated: true
        });
    }

    componentClicked = () => console.log('clicked ');

    render() {

        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <AppRouter />
                    <p>Authenticated</p>
                    <div >
                        <img src={this.state.picture}  alt={this.state.name} />
                        <img src={this.state.userDetails.imageUrl} alt={this.state.userDetails.name} />
                        <h2>Welcome {this.state.name} {this.state.userDetails.name}</h2>
                        Email: {this.state.email} {this.state.userDetails.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={useStyles.paper}>
                        <Avatar className="">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className="" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className=""
                            >
                                Sign In
                            </Button>
                            <FacebookLogin
                            appId="559530038229367"
                            buttonText="Login with Facebook"
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />
                          
                            <GoogleLogin
                                className="c-custom-login__btn"
                                clientId="1048522197511-hf2lgtvb9m2fi1r90ifki27ii28ablf6.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onClick = {this.componentClicked}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                    </Container>

                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

