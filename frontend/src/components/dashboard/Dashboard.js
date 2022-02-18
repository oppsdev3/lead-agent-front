import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";


const menuItems = [
    {name: 'Leads', exact:true, to: '/leads', iconClassName:"zmdi zmdi-view-dashboard", subMenus: [{ name: "Total Leads", exact:true, to: '/leads' }, { name: "Lead Status", to: '/leadstatus' }]},
    {name: 'Reports', to: '/reports', iconClassName:"zmdi zmdi-view-toc"},
    {name: 'Profiles', to: '/profiles', iconClassName:"zmdi zmdi-account-circle"},
]

const Dashboard =(props) => {


    const [inactive, setInactive] = useState(false);


    useEffect(() => {
        if(inactive){
            document.querySelectorAll('submenu').forEach(el => {
                el.classList.remove('active');
            })
        }

        props.onCollapse(inactive);

    }, [inactive])


    return(
        <div className={`side-menu ${inactive ?  'inactive' : '' }`}>
            <div className={"top-section"} >
                <div className={'logo'}>
                    <img src={require('../images/MicrosoftTeams-image (1).png')} />
                </div>
                <div className={'toggle-menu'}>
                    <button onClick={() => setInactive(!inactive)} className={'btn'}>
                        {
                            inactive ? <i className="zmdi zmdi-caret-left-circle"> </i> : <i className="zmdi zmdi-caret-right-circle"> </i>
                        }

                    </button>
                </div>
            </div>

            <div className={'divider'}> </div>

            <div className={'dashboard-text'}>
                <div className={'dashboard-icon'}>
                    <i className="zmdi zmdi-collection-bookmark" style={{color: "bisque", marginTop:"40%", fontSize: "1.5rem" }}> &nbsp;  <span> DASHBOARD </span>  </i>
                </div>
               <div className={'main-menu'}>
                    <ul>


                        {
                            menuItems.map((menuItem, index) =>
                                <MenuItem
                                    key={index} name={menuItem.name} exact={menuItem.exact} iconClassName={menuItem.iconClassName} to={menuItem.to} subMenus={menuItem.subMenus || [ ]}
                                    onClick={() => {
                                        if(inactive){
                                            setInactive(false);
                                        }
                                    }
                                    }
                                />)
                        }




                    </ul>

                </div>
            </div>

            <div className={'side-menu-footer'}>
                <div className={'footer-avatar'}>
                    <img src={require('../images/one-round-modified.png')} />
                </div>
                <div className={'user-info'}>
                    <h5>Testuser One</h5>
                    <p>testuserone@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;