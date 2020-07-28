import React from 'react';
import './Form.css';
import InputField from '../inputField';
import TextField from '../inputField/textField.js';
import DropdownField from '../inputField/dropdown.js';
import SelectSections from '../inputField/selectSections.js';
import ButtonComponent from '../button';
import { Divider } from 'antd';
import { Form } from 'antd';

const SingleCellForm = ({ fields, button}) => {
    return (  
    <Form className="form_container" >
        {
            fields.map(field=>{
                if(field.divider){
                    return  <div className="form__sectionDivider">
                        <Divider />
                        <h4 className="form__sectionDivider-text">
                            {field.divider.title}
                        </h4>
                    </div>
                }else{
                    if(field.input === 'text'){
                        return  <TextField 
                        key={field.name}
                        label= {field.label}
                        name= {field.name}
                        rules= {field.rules}
                        ></TextField>
                    }if(field.input === 'select'){
                        return  <DropdownField 
                        key={field.name}
                        label= {field.label}
                        name= {field.name}
                        rules= {field.rules}
                        options= {field.options}
                        placeholder = {field.placeholder || ''}
                        ></DropdownField>
                    }if(field.input === 'selectSections'){
                        return  <SelectSections 
                        sections= {field.sections}
                        ></SelectSections>
                    }else {
                        return  <InputField 
                        key={field.name}
                        label= {field.label}
                        name= {field.name}
                        rules= {field.rules}
                        ></InputField>
                    }
                }
            })
        }
        {
            button &&
            <ButtonComponent type={button.action || ''} bgcolor="primary" txcolor="white" 
                action={button? button.action : console.log("onClick")} >
                {
                    <>
                    <p>
                        {button.name || 'إرسال'}
                    </p>
                    {button.icon} 
                    </>
                }
               
            </ButtonComponent>
        }
    </Form> 
);
}
 
export default SingleCellForm;
