import React from 'react';
import { Link ,useHistory } from 'react-router-dom';
import './navbar.css';

const Navbar = ({active}) => {
    const history = useHistory();
    const navigateToModule = (path) => {
        history.push(`/${path}`);
    }
    const navigation = [{
        name : 'مسئول النظام',
        to : 'admin',
    },
    {
        name : 'بيانات وصفية',
        to : 'descriptive',
    },
    {
        name : 'بيانات مكانية',
        to : 'spacial',
    },
    {
        name : 'استفسارات سابقة التعريف',
        to : 'q&a',
    },
    {
        name : 'تقارير',
        to : 'reports',
    }
]
    return ( 
        <div className="navbar__container">
            {
                navigation.map( option =>{
                    if (option.to === active){
                        return <div className="navbar__item-active">
                            <Link > {option.name} </Link>
                        </div>
                    }
                    return <div className="navbar__item">
                        <Link onClick={()=>navigateToModule(option.to)}>
                            {option.name} 
                        </Link>
                    </div>
                })
            }
        </div>
     );
}
 
export default Navbar;