import React from 'react';
import './steps.css';
import { Steps, Divider } from 'antd';

const { Step } = Steps;

const SectionSteps = ({current, changeActive, sections}) => {
    
    return ( 
        <Steps progressDot
         current={current}
         onChange={()=>changeActive()}
        direction="vertical">
        {   sections.map(section=>
            <Step title={section.title} />
            )
        }
        </Steps>
     );
}
 
export default SectionSteps;