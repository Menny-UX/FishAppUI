import React, { useState } from 'react';
import { Layers } from 'react-feather';
import './labels.css';

const LabelsComponent = ({labels}) => {
    const [visible, setVisiblity ] = useState(false);
    const toggleVisibility = () =>{
        const newState = !visible;
        setVisiblity(newState);
    }
    return ( 
        <div className="labels__wrapper">
            <div className="labels__button-toggle" data-state={visible? 'display': 'hide'} onClick={ ()=> toggleVisibility() }>
                <Layers/>
            </div>
            <div className="labels__container" data-state={visible? 'display': 'hide'}>
                {
                    labels.map(label => {
                        return <div className="label__prop">
                            <div className="label__presentaion" 
                                style={{backgroundColor: `${label.color}`}}>
                            </div>
                            <div className="label__name">
                                {label.name}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
     );
}
 
export default LabelsComponent;