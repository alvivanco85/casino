import React from 'react';

import Jumbo from '../Components/Jumbotron/Jumbo'
import Register from '../Components/Register/Register';

function SignupPage(props) {

    return (
      <div> 
        <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Register/>
      </div>
 
    );

}

export default SignupPage;