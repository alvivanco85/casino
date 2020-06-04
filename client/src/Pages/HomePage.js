import React from 'react';

import Jumbo from '../Components/Jumbotron/Jumbo'
import Carousel from '../Components/Carousel/Carousel';

function HomePage(props) {

    return (
       <div> 
           <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
           <Carousel/>
       </div>
      
    );

}

export default HomePage;