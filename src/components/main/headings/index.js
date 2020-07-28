import React from 'react';
import './heading.css';

const Heading = (props) => {
    return ( <div>
        <h3 className={props.light?
            'section__title-light' :
            'section__title'
        }>
        {props.children}
        </h3>
    </div> );
}
 
export default Heading;