import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style.css";
const axios = require('axios');

function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var userData = {
      email: email,
      password: password,
      firstName: name,
      lastName: lastname,
    };
    if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
      return;
    }
    // Value check
    console.log(userData.email);
    console.log(userData.password);
    console.log(userData.firstName);
    console.log(userData.lastName);

    signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);
  }

  function signUpUser(email, password, name, lastname) {
   axios.post("/api/signup", {
     email: email,
     password: password,
     firstName: name,
     lastName: lastname,
   })
     .then(function (data) {
       window.location.replace("/members");
       // If there's an error, handle it by throwing up a bootstrap alert
     })
     .catch(handleLoginErr);
 }
 function handleLoginErr(err) {
   console.log(err);
 }

  return (
    <div className='div'>
      <form className="Register" onSubmit={handleSubmit}>
        <div className='input-Name'>
            <FormGroup controlId="name" bsSize="large">
            <FormLabel>Name</FormLabel>
            <FormControl autoFocus type="text" value={name} onChange={e => setName(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Lastname'>
        <FormGroup controlId="lastname" bsSize="large">
            <FormLabel>Last Name</FormLabel>
            <FormControl type="text" value={lastname} onChange={e => setLastName(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Email'>
            <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </FormGroup>
        </div>

        <div className='input-Password'>
            <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password"/>
             </FormGroup>
        </div>

        <div className='submit-Create-Btn'>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
                 Create
            </Button>
        </div>

      </form>
    </div>
  );
}

export default Register;
