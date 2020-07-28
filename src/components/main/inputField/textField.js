import React from 'react';
import { Form, Input } from 'antd';
import './inputField.css';

const TextField = (props) => {
    return (
        <>
          <Form.Item
            label= {props.label}
            name= {props.name}
            rules={[...props.rules]}
        >
            <Input.TextArea size="small"/>
        </Form.Item>
        </>
      );
}
 
export default TextField;