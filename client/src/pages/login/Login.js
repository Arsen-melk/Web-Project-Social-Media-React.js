import {useContext, useRef} from "react";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import { CircularProgress } from '@mui/material';
import "./login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {  isFetching, dispatch } = useContext(AuthContext);


   const handleClick = (e) => {
     e.preventDefault();
     loginCall({email: email.current.value, password: password.current.value }, dispatch)
   }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">facebook</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Facebook.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" required minLength={6} className="loginInput" ref={email} />
                <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress /> : "Log in"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">{isFetching ? <CircularProgress /> : "Create a new Account"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

