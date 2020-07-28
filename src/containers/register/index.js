import React from 'react'
import SingleCellForm from '../../components/main/Form';
import './register.css';
import logo1 from '../../images/logos/wzaritElzra3a.png';
import logo2 from '../../images/logos/gafrd.png';
import logo3 from '../../images/logos/prosylabWhite.png';
import  { useHistory } from 'react-router-dom';


const RegisterPage = () => {
    const history = useHistory();

    return ( <div className="Register__container">
        <div className="Register__image">
        </div>
        <div className="register__text">
            <h2 className="register__Heading">
                نظام معلومات الهيئة العامة لتنمية الثروة السمكية
            </h2>
            <div className="RegisterForm__container">
                <h3 className="register__Title">
                من فضلك قم بإدخال الاسم و كلمه السر للدخول للموقع:
                </h3>
                <SingleCellForm fields={[
                {   
                    input: 'basic',
                    label: 'الاسم',
                    name: 'name',
                    rules: [{ required: true, message: 'Please input your password!' }]
                },
                {   
                    input: 'basic',
                    label: 'كلمة السر',
                    name: 'password',
                    rules: [{ required: true, message: 'Please input your password!' }]
                }]
                }
                button={{ name: 'تسجيل دخول', action: ()=>{ history.push('./admin')}}}
                />
            </div>
            <div className="supporting__logos">
               <div className="typography__logos support_logo">
                    <img src={logo3} />
               </div> 
               <div className="circled__logos support_logo">
                    <img src={logo1} />
                    <img src={logo2} />
               </div> 
            </div>
            </div>
    </div> );
}
 
export default RegisterPage;