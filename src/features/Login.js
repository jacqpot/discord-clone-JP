import React from "react";
import "../style/Login.css";
import logo from "../style/logo.png";
import { Button } from "@material-ui/core";
function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <h2>I am the login page</h2>
      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}
export default Login;
