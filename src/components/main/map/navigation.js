import React, { useState } from 'react';
import { ZoomIn , ZoomOut, MousePointer ,
            Info, Trash2, Eye, EyeOff
    } from 'react-feather';
import SingleCellForm from '../Form';
import './navigation.css';

const NavigationComponent = ({ visible , toggleShow}) => {
    const [ selected , setSelected ] = useState(null);
    const [ selectedList , setSelectedList ] = useState([
        { state: 'hide' ,type: 'بحيرات', city:'الإسكندرية', visit: 'الربيع الرابع 2013'},
        { state: 'show' ,type: 'بحيرات', city:'الإسكندرية', visit: 'الربيع الرابع 2013'},
        { state: 'show' ,type: 'بحيرات', city:'الإسكندرية', visit: 'الربيع الرابع 2013'},
        { state: 'hide' ,type: 'بحيرات', city:'الإسكندرية', visit: 'الربيع الرابع 2013'}
    ]);
    
    return ( 
        <div className="navigation__wrapper">
            <div className="navigation__button" data-state={visible? 'moved': 'default'}>
                <div className="basic__navigation" >
                    <div className="nav__item">
                        <ZoomIn />
                    </div>
                    <div className="nav__item">
                        <ZoomOut />
                    </div>
                    <div className="nav__item">
                        <MousePointer />
                    </div>
                    <div className="nav__item">
                        <Info />
                    </div>
                </div>
                <div className="delete__item">
                    <div className="nav__item">
                        <Trash2 />
                    </div>
                </div>
            </div>
            <div className="navigation__settings" data-state={visible? 'display': 'hide'}>
               <div className="filter__form">
                    <SingleCellForm 
                        fields={
                            [
                                {
                                    input: 'select',
                                    label : 'المحافظة',
                                    name : 'city',
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                    options: [
                                        {name:"مسؤول نظام", value:"admin"},
                                        {name:"موظف", value:"employee"},
                                        {name:"موظف1", value:"1employee"},
                                    ],
                                },
                                {
                                    input: 'select',
                                    label : 'المعلم',
                                    name : 'city',
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                    options: [
                                        {name:"مسؤول نظام", value:"admin"},
                                        {name:"موظف", value:"employee"},
                                        {name:"موظف1", value:"1employee"},
                                    ],
                                },
                                {
                                    input: 'select',
                                    label : 'الربيع',
                                    name : 'city',
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                    options: [
                                        {name:"مسؤول نظام", value:"admin"},
                                        {name:"موظف", value:"employee"},
                                        {name:"موظف1", value:"1employee"},
                                    ],
                                },
                            ]
                        }
                        button ={{name:'أختيار', icon: <Eye/>}}
                    />
               </div>
               <div className="selected__list-toggle">
               <h3 className="main__heading">
               البيان المختار: 
               </h3>
                        {
                            selectedList.map( obj => {
                                return <div className="selected__layer" 
                                    data-state={obj.state === 'show'? "show": "hide" }>
                                    <div className="selected__state">
                                    { 
                                        obj.state === 'show'? 
                                        <Eye/> : 
                                        <EyeOff/> 
                                    }
                                    </div>
                                    <div className="selected__name">
                                    {`${obj.type} , ${obj.city}, ${obj.visit}`}
                                    </div>
                                </div>
                            })
                        }
               </div>
            </div>
        </div>
     );
}
 
export default NavigationComponent;