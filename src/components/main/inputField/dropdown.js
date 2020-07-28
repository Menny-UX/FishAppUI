import React from 'react';
import { Select, Form } from 'antd';
import './inputField.css';

const DropdownField = ({options ,name ,label ,rules, placeholder}) => {
    const { Option } = Select;

    return ( 
        <Form.Item
        name= {name}
        label={label}
        rules={rules}
      >
       <Select placeholder={placeholder} size="small" >
        {
            options.map(option => <Option value={ option.value } > 
                {option.name} 
            </Option>)
        }
        </Select >
        </Form.Item>
     );
}
 
export default DropdownField;