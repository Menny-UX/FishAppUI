import React from 'react';
import TableComponent from '../../../main/table';
import TableAction from '../../../main/table/tableActions.js';
import { useHistory } from 'react-router-dom';

const SpacialDocPage = () => {
    const history = useHistory();

    const EditMap = () => {
        history.push('/admin/spacialDocuments/Map/1')
    }

    const columns = [
        {
          title: 'كود البيان',
          dataIndex: 'id',
          key: 'id',
          width: 159
        },
        {
          title: 'الزيارة',
          dataIndex: 'visit',
          key: 'visit',
        },
        {
          title: 'الاسم',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'المحافظة',
          dataIndex: 'city',
          key: 'city',
        },
        {
          title: 'تاريخ التعديل',
          dataIndex: 'editDate',
          key: 'editDate',
        },
        {
          title: 'العملية',
          dataIndex: 'job',
          key: 'job',
        },
        {
          title: 'افعال',
          key: 'operation',
          fixed: 'right',
          render: () => (
              <TableAction type="viewMap" 
                action={()=>EditMap()}
              />
          )
        },
      ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            id: `${i}`,
            visit: `الربع الثاني 201${3+i}`,
            name: `المنزلة`,
            city: 'بورسعيد',
            editDate: '11-05-2014',
            job:'تعديل',
        });
    }

    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             تأكيد تعديل البيانات المكانية:
             </h3>
             <div className="content__wrapper">
             <TableComponent 
                 filters={[
                     { name: 'بحيرات', value: 'All'},
                     { name: 'مزارع', value: 'Employees'},
                     { name: 'مفرخات', value: 'nonEmployees'}
                 ]}
                 button= {{ name : 'إضافة مستخدم', 
                    type: "primary",
                    action: () => console.log('u clicked here!!')
                 }}
                 columns={columns}
                 data={data}
             />
             </div>
         </div>
        </>
    );
}

export default SpacialDocPage;