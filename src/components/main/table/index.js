import React from 'react';
import {Plus} from 'react-feather';
import { Table } from 'antd';
import  FilterGroup  from '../filterGroup';
import  ButtonComponent from '../button'
import './table.css';


const TableComponent = ({filters, button, columns, data}) => {
    return ( 
        <>
        {
            filters || button ?
            <div className="table__Actions">
            <FilterGroup options={filters} />
            <ButtonComponent action={button.action} bgcolor="primary" txcolor="white" type="primary">
                <div className="center__item" >
                    <Plus/>
                    {button.name} 
                </div>
            </ButtonComponent>
            </div>
            :
            null
        }
            <Table columns={columns} 
            dataSource={data} 
            scroll={{x:'max-content', y: 250 }} />
        </>
     );
}
 
export default TableComponent;