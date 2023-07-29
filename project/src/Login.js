import React from 'react';
import './Login.css';
import Logo from  './images/img.png';
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      {/* <h2>i am login</h2> */}
      <div className="login_logo">
        <img src={Logo} alt="" />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
