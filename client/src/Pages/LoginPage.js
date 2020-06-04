import React from 'react';

import Jumbo from '../Components/Jumbotron/Jumbo'
import Form from '../Components/LoginForm/LoginForm'

function LoginPage(props) {

    return (
      <div> 
        <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Form/>
      </div>
 
    );

}

export default LoginPage;