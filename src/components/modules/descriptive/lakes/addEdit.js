import React, {useState} from 'react';
import SectionSteps from '../../../main/steps';
import CollapseSections from '../../../main/collapse';
import DoubleCellForm from '../../../main/Form/DoubleCell';
import TableInput from '../../../main/inputField/table';
import ButtonComponent from '../../../main/button';
import {Save} from 'react-feather';

const LakesAddForm = () => {
    const [current , setCurrent ] = useState(0)
    // const [sectionValidation, setSectionValidation ] = useState([2,3])
    
      const changeCurrent = current => {
        console.log('onChange:', current);
        setCurrent(current);
      };

    return ( 
        <>
        <div className="main__wrapper">
            <h3 className="main__heading">
            إستمارة بيانات البحيرات | نهر النيل | مفيضتوشكى | قناة السويس:
            </h3>
            <div className="content__wrapper">
            <div className="LongForm__layout-divider">
                <div className="sectionSteps__wrapper">
                    <SectionSteps current={current} 
                    changeActive={(id)=>changeCurrent(id)}
                    sections={[
                        {title: 'عامة'},
                        {title: 'المساحات'},
                        {title: 'وحدات الصيد'},
                        {title: 'كمية الإنتاج حسب حرف الصيد بالكجم'},
                        {title: 'كمية الإنتاج حسب الصنف بالكجم'},
                    ]}
                    />
                      <ButtonComponent  bgcolor="primary" txcolor="white" type="primary">
                            <div className="center__item" >
                                <Save/>
                                حفظ
                            </div>
                        </ButtonComponent>
                </div>
                <div className="sectionsForm__wrapper">
                    <CollapseSections sections={
                        [
                            {
                                header:'عامة',
                                error: true,
                                content :  <DoubleCellForm 
                                fields={
                                    [
                                        {   
                                            input: 'basic',
                                            label: 'التاريخ',
                                            name: 'date',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'select',
                                            label: 'المحافظة',
                                            name: 'city',
                                            options:[
                                                {name: 'alex', value: 'alex'},
                                                {name: 'cairo', value: 'cairo'},
                                            ],
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'اسم البحيرة | نهر النيل | مفيض تشكى | قناة السويس',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: ' مكتب المصايد',
                                            name: 'office',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'المركز',
                                            name: 'center',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'منطقة الثروة السمكية',
                                            name: 'region',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        }
                                    ]
                                }
                            />
                            },
                            {
                                header:'المساحات',
                                error: false,
                                content :  <DoubleCellForm 
                                fields={
                                    [
                                        {   
                                            input: 'basic',
                                            label: 'المساحة الكلية للبحيرة (بالفدان)',
                                            name: 'space',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'المساحة المستغلة في الصيد داخل البحيرة (بالفدان)',
                                            name: 'city',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'المساحة الغير مستغلة في الصيد (المساحات المغطاةبالنبتات المالية) بالفدان  ',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        }
                                    ]
                                }
                            />
                            },
                            {
                                header:'وحدات الصيد',
                                error: true,
                                content :  <DoubleCellForm 
                                fields={
                                    [
                                        {   
                                            input: 'basic',
                                            label: 'درجة المركبة',
                                            name: 'boatNumber',
                                            rules: []
                                        },
                                        {   
                                            input: 'select',
                                            label: 'نوع المركبة',
                                            name: 'city',
                                            options:[
                                                {name: 'alex', value: 'alex'},
                                                {name: 'cairo', value: 'cairo'},
                                            ],
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'رقم المركب',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'اسم المالك',
                                            name: 'name',
                                            rules: []
                                        },
                                        {   
                                            divider: {
                                                title:'قيمة وحدات الصيد بالجني:'
                                            },
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'قيمة قارب الصيد',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'قيمة معدات الصيد',
                                            name: 'name',
                                            rules: []
                                        },
                                        {   
                                            divider: {
                                                title:'تكاليف التشغيل بالجنية:'
                                            },
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'قيمة استهلاك الشباك',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'قيمة استهلاك قارب الصيد',
                                            name: 'name',
                                            rules: []
                                        },
                                    ]
                                }
                            />
                            },
                            {
                                header:'كمية الإنتاج حسب حرف الصيد بالكجم',
                                error: false,
                                content :  <DoubleCellForm 
                                fields={
                                    [
                                        {   
                                            input: 'basic',
                                            label: 'الحرف',
                                            name: 'space',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'عدد الوحدات',
                                            name: 'city',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        },
                                        {   
                                            input: 'basic',
                                            label: 'كمية الإنتاج (كجم)',
                                            name: 'name',
                                            rules: [{ required: true, message: 'Please input your password!' }]
                                        }
                                    ]
                                }
                            />
                            },
                            {
                                header:'كمية الإنتاج حسب حرف الصيد بالكجم',
                                error: false,
                                content :  <TableInput 
                                columns={
                                    [
                                        {
                                            title: 'الصنف',
                                            dataIndex: 'type',
                                            key: 'type',
                                          },
                                          {
                                            title: 'الحجم',
                                            children: [
                                                {
                                                  title: 'أولى',
                                                  dataIndex: 'first',
                                                  key: 'first',
                                                },
                                                {
                                                  title: 'ثانية',
                                                  dataIndex: 'second',
                                                  key: 'second',
                                                },
                                                {
                                                  title: 'ثالثة',
                                                  dataIndex: 'third',
                                                  key: 'third',
                                                },
                                            ]
                                        
                                          },
                                            {
                                            title: 'إجمالي الإنتاج (كجم)',
                                            dataIndex: 'production',
                                            key: 'production',
                                          },
                                            {
                                            title: 'عدد وحدات الصيد',
                                            dataIndex: 'production',
                                            key: 'production',
                                          },
                                            {
                                            title: 'متوسط سعر الصنف بالجنية',
                                            dataIndex: 'production',
                                            key: 'production',
                                          },
                                    ]
                                }
                                />
                            },
                        ]
                    }/>

                </div>
                </div>
            </div>
        </div>
       </>
     );
}
 
export default LakesAddForm;