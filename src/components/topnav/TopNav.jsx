import React from 'react';

import './topnav.css'
import {Link} from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

import notifications from "../../assets/JsonData/notification.json"

import user_image from '../../assets/images/tuat.png'

import user_menu from "../../assets/JsonData/user_menus.json"
const current_user = {
    display_name: "Euris Lee",
    image: user_image
}

const renderUserToggle = (user) => (
    <div className="topnav__right_user">
        <div className="topnav__right_user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right_user__name">
            {user.display_name}
        </div>
    </div>
)

const renderNotificationItem = (item, index) => (
    <div className="notification_item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification_item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right_item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(current_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}

                    />
                </div>
                <div className="topnav__right_item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => (
                            renderNotificationItem(item, index)
                        )}
                        renderFooter={()=><Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right_item">
                    {/* theme setting */}
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Topnav
