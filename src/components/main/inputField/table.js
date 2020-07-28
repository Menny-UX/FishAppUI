import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import ButtonComponent from '../button';
import {Plus} from'react-feather';
const TableInput = ({columns, data}) => {

    return ( 
        <>
            <div className="editable__table">
                <Table columns={columns} 
                dataSource={data} 
                scroll={{x:'max-content', y: 100 }} />
            </div>
            <ButtonComponent  
            txcolor="primary" type="primary">
            <div className="center__item" >
                <Plus/>
                إضافة صنف 
            </div>
            </ButtonComponent>
        </>
     );
}
 
export default TableInput;