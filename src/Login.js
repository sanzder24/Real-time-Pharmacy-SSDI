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
          src="https://user-images.githubusercontent.com/54637394/115992773-72d5e100-a59d-11eb-97e6-7891a6740042.png"
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
          <button className="button_slide slide_right" type="submit" onClick={login}>
            Sign in
          </button>
        </form>

        <p>By continuing, you agree to Bridges's Conditions of Use and Privacy Notice.</p>

        <button className="button_slide slide_right" onClick={register}>
          Create your Bridges Account
        </button>
      </div>
    </div>
  );
}

export default Login;