import React from 'react';
import { Collapse } from 'antd';
import './collapse.css';

const { Panel } = Collapse;

const CollapseSections = ({sections}) => {
    function callback(key) {
        console.log(key);
    }

    return ( 
        <div className="collapsable__Sections">
        <Collapse defaultActiveKey={['0']} onChange={callback}>
            {
                sections.map( (section, indx) =>{
                    return <Panel className={section.error?"Error_Found":''}
                        header={section.header} key={indx} >
                       {section.content}
                        </Panel>
                })
            }
        </Collapse>
        </div>
     );
}

export default CollapseSections;
