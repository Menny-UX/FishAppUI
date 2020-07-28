import React from 'react';
import TableComponent from '../../../main/table';
import TableAction from '../../../main/table/tableActions.js';
import { useHistory } from 'react-router-dom';
import { Space } from 'antd';

const LakeForm = () => {
    const history = useHistory();
    const columns = [
        {
          title: 'الربيع السنوي',
          dataIndex: 'quarter',
          key: 'quarter',
          fixed: 'left',
          width: 160
        },
        {
          title: 'كود البحيرة',
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
          width: 140
        },
        {
          title: 'اسم البحيرة',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'المحافظة',
          dataIndex: 'city',
          key: 'city',
        },
        {
          title: 'المنطقة',
          dataIndex: 'region',
          key: 'region',
        },
        {
          title: 'افعال',
          key: 'operation',
          fixed: 'right',
          render: () => (
            <Space size="middle">
              <TableAction type="viewRecords" />
            </Space>
          )
        },
      ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            quarter: `الربيع الثانى 2013`,
            id: `${i}`,
            name: 'المنزلة',
            city: 'بورسعيد',
            region: `بورسعيد`,
        });
    }

    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             إستمارة بيانات البحيرات | نهر النيل | مفيضتوشكى | قناة السويس:
             </h3>
             <div className="content__wrapper">
             <TableComponent 
                 filters={[
                     { name: 'جميع المستخدمين', value: 'All'},
                     { name: 'المستخدمين الحاليين', value: 'Employees'},
                     { name: 'المستخدمين الموقوفين', value: 'nonEmployees'}
                 ]}
                 button= {{ name : 'إضافة مستخدم',
                    type: "primary",
                    action: () => history.push('/descriptive/lackesForm/add')
                 }}
                 columns={columns}
                 data={data}
             />
             </div>
         </div>
        </>
    );
}
 
export default LakeForm;