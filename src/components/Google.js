import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {

    state = {
        userDetails: {},
        isUserLoggedIn: false,
    }

    responseGoogle = response => {
        console.log(response);
        this.setState({
            userDetails: response.profileObj,
            isUserLoggedIn: true
        });
    }

    componentClicked = () => console.log('clicked ');

    render() {
        let googleContent;

        if(this.state.isUserLoggedIn) {
            googleContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>

                <h2>Welcome  {this.state.userDetails.name} </h2>
                Email: {this.state.userDetails.email}
                <img src={this.state.userDetails.imageUrl} alt={this.state.userDetails.name} />

                </div>
            );
        } else {
            googleContent = (
                <GoogleLogin
                    className="c-custom-login__btn"
                    clientId="1048522197511-hf2lgtvb9m2fi1r90ifki27ii28ablf6.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onClick = {this.componentClicked}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}/>);
        }

        return (
            <div>{googleContent}</div>
        )
    }
}
