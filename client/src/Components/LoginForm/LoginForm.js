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