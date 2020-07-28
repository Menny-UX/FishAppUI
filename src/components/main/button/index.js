import React from 'react';
import { Button } from 'antd';
import './button.css';

const ButtonComponent = ({action, children, type = "",danger =false ,bgcolor, txcolor}, props) => {
    let btnClass = []
    if(bgcolor){
        if(bgcolor === 'white'){
            btnClass.push("bgcolor-white") 
        }else if(bgcolor === 'primary'){
            btnClass.push("bgcolor-primary") 
        }else{
            btnClass.push("bgcolor-custom")
        }
    }
    if(txcolor){
        if(txcolor === "primary"){
            btnClass.push("txcolor-primary")
        }else if(txcolor === "white"){
            btnClass.push("txcolor-white")
        }else(
            btnClass.push("bgcolor-custom")
        )
    }
    return (
        <Button type={`${type}`} htmlType="submit" 
        danger ={danger} data-bgcolor={bgcolor}
        className= {btnClass.join(" ")} data-txcolor={txcolor}
        onClick={ action } >
        <div className="center_items">
            {children}
        </div>
        </Button>
    )
}
 
export default ButtonComponent;
