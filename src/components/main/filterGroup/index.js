import React, { useState } from 'react';
import { Radio } from 'antd';
import './filterGroup.css';

const FilterGroup = ({options}) => {
    const [ filter, setFilter ] = useState('All')
    
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setFilter(e.target.value)
    };

    return ( 
        <Radio.Group onChange={onChange} value={filter}>
           { options.map(option => <Radio value={option.value}> {option.name} </Radio>)}
        </Radio.Group>
    );
}
 
export default FilterGroup;