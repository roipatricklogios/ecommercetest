import React, {useState} from 'react';
import './Login.css'
import logo from './logo.svg';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase'

function Login(){

    const history = useHistory();
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserPassword] = useState('')
    

    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const registeruser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="login-main">
            <Link className="" to="">
                <img src={logo} alt="login_logo" className="header__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" className="login__email" />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" className="login__password" />
                    <br/>
                    <button onClick={loginuser} type="submit" className="login__submit">Sign In</button>
                </form>
                <p>Terms and Conditions</p>
                <button onClick={registeruser} className="login__register">Sign Up</button>
            </div>
        </div>
    )
}


export default Login;
