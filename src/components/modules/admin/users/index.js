import React ,{ useState } from 'react';
import TableComponent from '../../../main/table';
import TableAction from '../../../main/table/tableActions.js';
import ModelComponent from '../../../main/model';
import UserEdit from './addEdit.js';
import { useHistory } from 'react-router-dom';
import { Space } from 'antd';

const UsersPage = () => {
    const history = useHistory();

    const [ edit , setEdit] = useState(false);
    const [ visible , setVisible ] = useState( false );

    const showModal = () => {
        setVisible(true);
        history.push('/admin/users/add');
    };
    const hideModal = () => {
        setVisible(false);
        history.push('/admin/users');
    };

    const columns = [
        {
          title: 'كود المستخدم',
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
          width: 159
        },
        {
          title: 'الاسم المستخدم',
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        {
          title: 'الوظيفة',
          dataIndex: 'job',
          key: 'job',
        },
        { title: 'المحافظة التابع لها', dataIndex: 'address', key: '8'},
        {
          title: 'افعال',
          key: 'operation',
          fixed: 'right',
          render: () => (
            <Space size="middle">
              <TableAction type="edit" />
              <TableAction type="delete" />
            </Space>
          )
        },
      ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            id: `${i}`,
            name: `هبة القاضي ${i}`,
            job: 'مسؤول النظام',
            address: `القاهره. ${i}`,
        });
    }


    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             إدارة المستخدمين: 
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
                    action: () => showModal()
                 }}
                 columns={columns}
                 data={data}
             />
             </div>
         </div>

        <ModelComponent title={ edit? "تعديل مستخدم جديد: " : "إضافة مستخدم جديد:" } visible={ visible } hideModal={()=>hideModal()}>
                 <UserEdit hideModal={()=>hideModal()} />
        </ModelComponent>
        </>
    );
}

export default UsersPage;