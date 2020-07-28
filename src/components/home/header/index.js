import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './header.css';
import { Divider } from 'antd';
import Logo from './../../../images/logos/gafrd.png';

const Header = () => {
    let history = useHistory();
    const [ active, setActive ] = useState('about');
    const sectionNav = (id) =>{
        setActive(id);
        if(id !== "register") {
            history.push(`/home/${id}`);
        }else{
            history.push(`/register`);
        }
    }

    return ( <div className="header__container">
        <div className="header__Logo">
            <img src={Logo} className="header__logo-img"/>
            <div className="header__logo-text">
            نظام معلومات الهيئة العام 
            <b>لتنمية الثروة السمكية </b>
            </div>
        </div>
        <div className="header__content">
                <div className="home__nav">
                    <Link onClick={()=>sectionNav('about')} 
                    className={
                        active === 'about'? 
                        "header__nav--activeItem" : 
                        "header__nav--item"
                    }>
                    عن المشروع  
                    </Link>
                    <Link onClick={()=>sectionNav('benifits')}
                     className={
                        active === 'benifits'? 
                        "header__nav--activeItem" : 
                        "header__nav--item"
                    }>
                    المميزات  
                    </Link>
                    <Link onClick={()=>sectionNav('contact')}
                     className={
                        active === 'contact'? 
                        "header__nav--activeItem" : 
                        "header__nav--item"
                    }>
                    التواصل 
                    </Link>
                <Divider type="vertical" orientation="center" />
                    <Link  onClick={()=>sectionNav('register')}
                    className="header__nav--item header__nav--register">
                        تسجيل دخول 
                    </Link>
                </div>
        </div>
    </div> );
}
 
export default Header;