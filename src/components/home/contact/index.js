import React from 'react';
import Heading from '../../main/headings';
import './contact.css';
import SingleCellForm from '../../main/Form';

const Contact = () => {
    return ( <div className="contact__container">
        <div className="contact__right">
            <Heading light={true} >تواصل معنا:</Heading>
            <div className="contact__text">
            لو عندك أي استفسار لا تتردد لتواصل مهنا, سجل استفسارك و سوف نجيب عليك في اقرب وقت .
            </div>
        </div>
        <div className="contact__left">
            <div className="contact__form-background">
                <SingleCellForm 
                    fields= {
                    [{ 
                        input: "basic",
                        label: "الاسم",
                        name: "username",
                        rules: [{ required: true, message: 'Please input your username!' }]
                    },{
                        input: "basic",
                        label: "البريد الألكتروني",
                        name: "email",
                        rules: [{ required: true, message: 'Please input your username!' }]
                    },{
                        input: "text",
                        label: "الرسالة",
                        name: "message",
                        rules: [{ required: true, message: 'Please input your username!' }]
                    }]
                } button= {{ name: "ارسال" }} />
            </div>
        </div>
    </div> );
}
 
export default Contact;