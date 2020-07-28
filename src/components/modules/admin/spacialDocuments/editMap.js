import React, {useState} from 'react';
import ParentDescription from '../../../main/table/tableParent.js';
import Map from '../../../../images/map/map.jpg';
import LabelsComponent from '../../../main/map/labels.js';
import NavigationComponent from '../../../main/map/navigation.js';
import ButtonComponent from '../../../main/button/index.js';
import {Check , X} from 'react-feather'
const EditMap = () => {
    const [ showSetting , setShowSetting ] = useState(false);

    const toggleSettings = ()=>{
        const newStat = !showSetting;
        setShowSetting(newStat);
    }

    return ( <>
        <div className="main__wrapper">
            <h3 className="main__heading">
             تأكيد تعديل البيانات المكانية للبحيرة المنزلة 
             </h3>
             <div className="content__wrapper nested__Document">
                <ParentDescription parent={[
                    {name: 'الاسم', value: 'المنزلية'},
                    {name: 'المحافظة', value: 'بورسعيد'},
                    {name: 'الزيارة', value: ' الربع الثاني 2013'},
                    {name: 'التعديل', value: '11-05-2014'},
                ]} 
                backTo="/admin/spacialDocuments"
                />
                <div className="nestedChild__wrapper">

                    <div className="map__container" 
                        onClick={()=>toggleSettings()} >
                        <img src={Map} />
                    </div>

                    <LabelsComponent labels={[
                        {name: 'buildings', color: 'beige'},
                        {name: 'trees', color: 'green'},
                        {name: 'sea', color: 'skyblue'},
                        {name: 'lawn', color: 'lightgreen'},
                        {name: 'lawn', color: 'lightgreen'},
                    ]} />

                    < NavigationComponent 
                    visible={showSetting} 
                    toggleShow={()=>toggleSettings()}
                    />
                    <div className="action__panel">
                        <ButtonComponent danger={true} action={()=>console.log('u Clicked here !!')}>
                                <div>
                                رفض التعديل
                                </div>
                            <X/>
                        </ButtonComponent>
                        <ButtonComponent bgcolor="white" txcolor="primary" type="primary"  action={()=>console.log('u Clicked here !!')}>
                                <div>
                                تأكيد التعديل
                                </div>
                            <Check/>
                        </ButtonComponent>
                    
                    </div>
                </div>
             </div>
        </div>
        </>
     );
}
 
export default EditMap;