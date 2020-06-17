import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='div'>
      <form className="Login" onSubmit={handleSubmit}>
        <div className='input-Email'>
            <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)}/>
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
       <script type="text/javascript" src="../../Javascripts/login.js"></script>
      </form>
    </div>
  );
}

export default Login;
