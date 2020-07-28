import React, { useState } from 'react';
import SingleCellForm from '../../../main/Form';

const UserEdit = ({ hideModal }) => {

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
                    input: 'select',
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
                    input: 'select',
                    label: 'المحافظة التابع لها',
                    name: 'city',
                    rules: [{ required: true, message: 'Please input your password!' }],
                    options: [
                        {name:"الاسكندريه", value:"Alex"},
                        {name:"القاهرة", value:"Cairo"},
                    ],
                    placeholder: "Please select city"
                }
            ]}

            button= {{
                name: 'حفظ',
                type: "primary",
                action: ()=> hideModal(),
            }}
                />
        </div>
    );
}

export default UserEdit;