import React from 'react';
import {Form, Collapse , Checkbox } from 'antd';

const { Panel } = Collapse;

const SelectSections = ({sections}) => {
    function callback(key) {
        console.log(key);
    }

    return ( 
        <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0']} onChange={callback}>
            {
                sections.map( (section, indx) =>{
                    return <Panel header={section.header} key={indx} >
                        <Form.Item 
                            name={`checkbox-${section.name}`}>
                            <Checkbox.Group>
                                {
                                    section.options.map((option, i)=>
                                        <Checkbox  value={option.value} key={i} 
                                        style={{ lineHeight: '32px' }}>
                                            {option.name}
                                        </Checkbox>
                                    )
                                }
                            </Checkbox.Group>
                        </Form.Item>
                    </Panel>
                })
            }
        </Collapse>
     );
}

export default SelectSections;
