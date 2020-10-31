import React from "react";
import "../style/Login.css";
import { auth, provider } from "./firebase";
import logo from "../style/Discord_logo.svg";
import { Button } from "@material-ui/core";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}
export default Login;
