import React from 'react';
import { Tooltip , Button }from 'antd';
import { Edit, XCircle, Map, Calendar } from 'react-feather'

const TableAction = ({type , action }) => {
    const defaultActions = {
        edit : {
            title: 'تعديل',
            color: '#89DBD9',
            icon: <Edit/>
        },
        delete : {
            title: 'حذف',
            color: '#FF7285',
            icon: <XCircle/>
        },
        viewMap : {
            title: 'أضهار خريطة',
            color: '#379AB2',
            icon: <Map/>
        },  
        viewRecords : {
            title: 'أضهار السجلات',
            color: '#379AB2',
            icon: <Calendar/>
        },
    }
    const actionButton = defaultActions[type];
    return ( 
        <div className="action__item">
            {
                <Tooltip title={ actionButton.title } >
                    <Button type="primary" shape="circle" 
                    className={ type === "delete" ?
                    "warning__actionColor"
                    :"default__actionColor"}
                    icon={ actionButton.icon }
                    onClick={ action }
                    />
                </Tooltip>
            }
        </div>
     );
}
 
export default TableAction;