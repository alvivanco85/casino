import React from 'react';
import {useSpring, animated} from 'react-spring';

import './style.css'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className='a-card-info' bg='transparent' style={style}>
            <p className='a-card-title'>{props.title}</p>
            <p className='a-card-sub-title'>{props.subTitle}</p>
            <a href={props.link} rel='noopener noreferrer'>Login</a>
        </animated.div>
    );

}

export default CardInfo;