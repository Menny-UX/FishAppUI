import React, { useState } from 'react';
import SingleCellForm from '../../../main/Form';

const JobsEdit = ({ hideModal }) => {

    return(
        <div className="editForm__container">
             <SingleCellForm fields={[
                {   
                    input: 'basic',
                    label: 'الاسم',
                    name: 'name',
                    rules: [{ required: true, message: 'Please input your password!' }]
                },
                {   
                    input: 'input',
                    label: 'الوظيفة',
                    name: 'job',
                    rules: [{ required: true, message: 'Please input your password!' }],
                    options: [
                        {name:"مسؤول نظام", value:"admin"},
                        {name:"موظف", value:"employee"},
                        {name:"موظف1", value:"1employee"},
                    ],
                    placeholder: "Please select job"
                },
                {   
                    input: 'selectSections',
                    sections: [
                        {
                            header: 'مسئول النظام',
                            name: 'admin',
                            options: [
                                {value: 'reports', name: 'اصدار تقارير'}
                            ]
                        },
                        {
                            header: 'البيانات الوصفية',
                            name: 'descriptive',
                            options: [
                                {value: 'inputDoc', name: 'ادخال بينات'},
                                {value: 'editDoc', name: 'تعديل بينات'},
                                {value: 'deleteDec', name: 'حذف بينات'},
                                {value: 'inputDoc', name: 'ادخال بينات'},
                                {value: 'editDoc', name: 'تعديل بينات'},
                                {value: 'deleteDec', name: 'حذف بينات'},
                            ]
                        },
                        {
                            header: 'البيانات المكانية',
                            name: 'spacialDocument',
                            options: [
                                {value: 'editMaps', name: 'تعديل الخرائط'},
                                {value: 'deleteMaps', name: 'حذف خريطة'},
                            ]
                        },
                        {
                            header: 'التقارير',
                            name: 'report',
                            options: [
                                {value: 'reports', name: 'اصدار تقارير'}
                            ]
                        },
                    ]
                  
                }
            ]}

            button= {{
                name: 'حفظ',
                action: ()=> hideModal(),
                type: "primary"
            }}
                />
        </div>
    );
}

export default JobsEdit;