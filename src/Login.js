import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./stateProvider";
import { auth } from "./firebase";

import "./Login.css";

function Login() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // Login...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log('signedin');
        
        history.push("/");
      })
      .catch((e) => {});
  };

  const register = (event) => {
    event.preventDefault();
 
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
      
         history.push("/");
      })
      .catch((e) => {});
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email:</h5>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <h5>Password:</h5>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="login__signInButton" type="submit" onClick={login}>
            Sign in
          </button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;