import React from 'react';
import SingleCellForm from './index.js'
import './Form.css'

const DoubleCellForm = ({ fields, button}) => {
    return ( 
        <div className="doubleCellForm__wrapper">
            <SingleCellForm 
            fields={fields} 
            button={button} 
            />
        </div>
     );
}
 
export default DoubleCellForm;