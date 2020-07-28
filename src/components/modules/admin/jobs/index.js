import React ,{ useState } from 'react';
import TableComponent from '../../../main/table';
import ModelComponent from '../../../main/model';
import { useHistory, useLocation } from 'react-router-dom';
import TableAction from '../../../main/table/tableActions.js';
import { Space , Tag } from 'antd';
import JobsEdit from './addEdit.js';

const JobsPage = () => {
    const history = useHistory();

    const [ edit , setEdit] = useState(false);
    const [ visible , setVisible ] = useState( false );

    const showModal = () => {
        setVisible(true);
        history.push('/admin/jobs/add');
    };
    const hideModal = () => {
        setVisible(false);
        history.push('/admin/jobs');
    };

    const permissionsList = {
        admin: ['تأكيد تعديل بينات مكانية'],
        descriptive:[
            'ادخال بينات',
            'تعديل بينات',
            'حذف بينات'
        ],
        spacialDocument: [
            'تعديل الخرائط',
            'حذف خريطة'
        ],
        report: [
            'اصدار تقارير'
        ]
    }
   
    const permissionsArray = [
        ...permissionsList.admin,
        ...permissionsList.descriptive,
        ...permissionsList.spacialDocument,
        ...permissionsList.report
    ]

    const columns = [
        {
          title: 'كود الوظيفة',
          dataIndex: 'id',
          key: 'id',
          width: 159
        },
        {
          title: 'الاسم الوظيفة',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'الصلاحيات التابعة لها',
          dataIndex: 'permissions',
          key: 'permissions',
          render: (permissions) => (
            <span>
              {permissions.map((permission) => {
                  let type;
                if(permissionsList.admin.includes(permission)){
                    type = "admin";
                }else if(permissionsList.spacialDocument.includes(permission)){
                    type = "spacialDocument";
                }else if(permissionsList.report.includes(permission)){
                    type = "report";
                }else {
                    type = "descriptive";
                }
                return (
                  <Tag key={permission} data-type={type} >
                    {permission.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
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


    const random4 =()=> Math.floor(Math.random()*4)+1;
    const random8 =()=> Math.floor(Math.random()*7);
    const data = [];
    for (let i = 0; i < 100; i++) {
        let num = random4();
        let userPermissions = []
        for(let i = 0; i < num; i++){
            userPermissions.push(permissionsArray[random8()]);
        }
        data.push({
            key: i,
            id: `${i}`,
            name: `هبة القاضي ${i}`,
            permissions: [...userPermissions],
        });
    }


    return(
        <>
         <div className="main__wrapper">
             <h3 className="main__heading">
             إدارة الوظائف:  
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

        <ModelComponent title={ edit? "تعديل وظيفة : " : "إضافة وظيفة جديدة:" } visible={ visible } hideModal={()=>hideModal()}>
                 <JobsEdit hideModal={()=>hideModal()} />
        </ModelComponent>
        </>
    );
}

export default JobsPage;