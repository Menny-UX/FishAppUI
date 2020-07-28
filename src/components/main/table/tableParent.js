import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import ButtonComponent from '../button';


const ParentDescription = ({parent, backTo}) => {
    const history = useHistory();

    return ( 
        <div className="parentRow__discription">
            <div  className="parent__properties">
            {
                parent.map(property =>{
                    return  <div className="property__item">
                    <div className="property__name">
                        {property.name}
                    </div>
                    <div className="property__value">
                        {property.value}
                    </div>
                </div>
                })
            }
            </div>
              
            <div className="goback__button">
                <ButtonComponent type="text" action={()=>history.push(backTo)}>
                    <span>  الرجوع للجدول </span>
                    <ChevronDown/>
                </ButtonComponent>
            </div>
        </div> 

     );
}
 
export default ParentDescription;