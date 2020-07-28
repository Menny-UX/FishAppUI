import React, {useState} from 'react';
import Navbar from '../../components/layout/navbar';
import './admin.css';
import Sidemenu from '../../components/layout/sidemenu';
import {
    useHistory,
    Switch,
    Route
  } from "react-router-dom";
import UsersPage from '../../components/modules/admin/users';
import EditMap from '../../components/modules/admin/spacialDocuments/editMap.js';
import JobsPage from '../../components/modules/admin/jobs';
import SpacialDocPage from '../../components/modules/admin/spacialDocuments';
import AdminBasic from '../../components/modules/admin/basic';


const AdminPage = () => {
    const history = useHistory()
    const active ='admin';
    const [ sidemenu, setSidemenu] = useState('');
    const setActive = (id) => {
        setSidemenu(id);
        history.push(`/admin/${id}`);
    }
    const subNav = [
        {
            name : 'إدارة المستخدمين',
            to : 'users'
        },
        {
            name : 'إدارة الوظائف',
            to : 'jobs'
        },
        {
            name : 'إدارة الحرف',
            to : 'skills'
        },
        {
            name : 'إدارة الاصناف',
            to : 'types'
        },
        {
            name : 'إدارة مناطق الثروة السمكية',
            to : 'fisheryAreas'
        },
        {
            name : 'عرض السجلات ',
            to : 'documents'
        },
        {
            name : ' تأكيد تعديل البيانات المكانية ',
            to : 'spacialDocuments'
        },
    ]
    return ( 
        <div className="admin__container">
            < Sidemenu activeSub={ sidemenu } 
            content={ subNav } 
            setActive={(id)=>setActive(id)}/>
            <div>
                < Navbar active='admin' />
                <div className="content__container">
                <Switch>
                    <Route exact path="/admin/spacialDocuments/Map/:id">
                        <EditMap/>
                    </Route>
                    <Route path="/admin/users">
                        <UsersPage/>
                    </Route>
                    <Route path="/admin/jobs">
                        <JobsPage/>
                    </Route>
                    <Route exact path="/admin/spacialDocuments">
                        <SpacialDocPage/>
                    </Route>
                    <Route path="/admin">
                        <AdminBasic/>
                    </Route>
                </Switch>
                </div>
            </div>
        </div>
    );
}
 
export default AdminPage;