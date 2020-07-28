import React, { useState } from 'react';
import { Modal } from 'antd';
import './model.css';

const ModelComponent = (props) => {

    const [ confirmLoading ,setConfirmLoading ] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            props.hideModal();
            setConfirmLoading(false);
        }, 2000);
      };
    
    const handleCancel = () => {
        props.hideModal();
    };

    return ( 
        <>
        <Modal
          title={props.title}
          visible={props.visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={()=>props.hideModal()}
        >
          {props.children}
        </Modal>
      </>
     );
}
 
export default ModelComponent;