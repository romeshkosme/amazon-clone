import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { db, auth} from '../firebase';
import { withRouter } from 'react-router-dom';
import {setUser} from '../store/user/action'
import { connect } from "react-redux"

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(auth => {
                this.props.history.push('/')
            })
            .catch(error => {
                alert(alert.message)
            })
    }

    register = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(auth => {
                this.props.history.push('/')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="login">
                <Link to="/">
                    <img
                        className="login__logo"
                        src="https://th.bing.com/th/id/Rebfcc284b20ee35ccdf7222248f57d91?rik=hOmPBR19nUQETQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f03%2fAmazon-Logo-Transparent-PNG.png&ehk=gR9%2f4wYf2SZVyaGbsHAZYLcLGspS0C3IOrJkW9ZXHf4%3d&risl=&pid=ImgRaw"
                    />
                </Link>
                {
                    this.props.loginError &&
                    <div className="login__error">
                        Email/Password incorrect.
                    </div>
                }
                <div className="login__container">
                    <h1>Sign-In</h1>

                    <form>
                        <h5>Email</h5>
                        <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />

                        <h5>Password</h5>
                        <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />

                        <button type="submit" className="login__signInButton" onClick={this.signIn}>Sign In</button>
                    </form>
                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <button className="login__registerButton" onClick={this.register}>Create your Amazon Account</button>
                </div>
            </div>
        )
    }
}

// export default Login;
// export default withRouter(Login);
// export default connect(null, { setUser })(Login)
export default withRouter(connect(null, { setUser })(Login));