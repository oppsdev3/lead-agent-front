import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {

    const { name, subMenus, iconClassName, onClick, to, exact } = props;
    const [expand, setExpand] = useState(false);

    return(
        <li onClick={props.onClick}>
            <i className={iconClassName} style={{color: "bisque", fontSize: "1rem", marginLeft: "40%", marginRight: '-38.5%', display: "inline-block" }}> </i>
            <NavLink exact to={to} onClick={() => setExpand(!expand)} className={'menu-item'}> <span> {name} </span> </NavLink>

            {
                subMenus && subMenus.length > 0
                    ?
                    <ul className={`submenu ${expand ? "active" : "" }`}>
                        {subMenus.map((menu, index) =>
                            <li key={index} >
                            <NavLink  to={menu.to} className={'sub-menu-item'}> <span> {menu.name} </span> </NavLink>
                            </li>
                        )}
                    </ul>
                    :
                    null
            }

            <div className={'divider-two'}> </div>
        </li>
    )
}
export default MenuItem;