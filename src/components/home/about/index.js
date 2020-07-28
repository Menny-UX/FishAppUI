import React from 'react';
import Heading from './../../main/headings';
import './about.css';

const About = () => {
    return ( <div className="about__container">
        <div className="about__right">
            <Heading>نبذه سريعة عن المشروع:</Heading>
            <div className="about__text">
                <div className="about__text--paragraph">
                يعتبر هذا المشروع نظام متكامل لأداره الثروة السمكية و هذا من خلال أدخال و تعديل جميع بينات المنظومة من الموظفين إلي مناطق الثروة السمكية .
                </div>
                <div className="about__text--paragraph">
            هذا يساعد الموظفين علي ادخال المعلومات الوصفية و المكانية و معلومات الزيارات إلي بحيرات-مزارع-مفرخات بسرعه و دقه , مما يساعد المسؤولين علي اتخاذ القرار السليمة.
                </div>
            </div>
        </div>
        <div className="about__left">
            <div className="about__image" />
        </div>
    </div>
     );
}
 
export default About;