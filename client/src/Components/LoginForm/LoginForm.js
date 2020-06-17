import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  }

  return (
    <div className='div'>
      <form className="Login" onSubmit={handleSubmit}>
        <div className='input-Username'>
            <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl autoFocus type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Password'>
            <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password"/>
             </FormGroup>
        </div>

        <div className='submit-Login-Btn'>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
                 Login
            </Button>
        </div>

      </form>
    </div>
  );
}

export default Login;
