import React from 'react';
import Heading from '../../main/headings';
import businessImg from '../../../images/features/business.svg';
import contributeImg from '../../../images/features/contribute.svg';
import analysisImg from '../../../images/features/analysis.svg';
import './benifits.css';

const Benifits = () => {
    return ( <div className="benifits__container">
        <Heading>مميزات المشروع:</Heading>
        <div className="benifit__features">
            <div className="benifit_feature">
                <div className="feature_icon">
                    <img src={ businessImg } />
                </div>
                <div className="feature_title">
                إدارة
                </div>
                <div className="feature_text">
                دعم المسؤل النظام علي إداره جميع احوال الثروة السمكية</div>
            </div>
            <div className="benifit_feature">
                <div className="feature_icon">
                    <img src={ contributeImg } />
                </div>
                <div className="feature_title">
                مساعدة
                </div>
                <div className="feature_text">
                مساعدة الموظفين علي ادخال البينات الوصفية و المكانية بسرعة و دقة عالية
                </div>
            </div>
            <div className="benifit_feature">
                <div className="feature_icon">
                  <img src={ analysisImg } />
                </div>
                <div className="feature_title">
                تحليل
                </div>
                <div className="feature_text">
                استخراج التقارير عن المزارع و البحيرات اللازمة لاتخاذ القرارات الصائبة في إدارة الثروة السمكية
                </div>
            </div>
        </div>
    </div> );
}
 
export default Benifits;