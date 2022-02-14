import React, { useEffect, useState } from 'react'
import { BiUser, BiWrench } from "react-icons/bi"
import { AiOutlinePoweroff, AiOutlineClose } from "react-icons/ai"
import { MdMonitor } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import { RiPagesLine } from "react-icons/ri"
import { FaRegPaperPlane, FaWpforms } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"
import { BsPencil, BsBarChart } from "react-icons/bs"
import Activity from './Activity'

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    const [userName, setUserName] = useState("");
    const [userOnline, setUserOnline] = useState(false);
    const [properties, setProperties] = useState([]);
    const [activities, setActivities] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Set Properties from here
        setUserName("John Doe");
        setUserOnline(true);
        const propertiesArray = [
            {
                name: "Profile Complete",
                value: "70%",
                color: "#3F6E97"
            },
            {
                name: "Disk Usage",
                value: "37%",
                color: "#269290"
            }
        ]
        setProperties(propertiesArray);
    }, [])

    useEffect(() => {
        const activitiesArray = [
            {
                name: "Dashboard",
                icon: <MdMonitor />,
                hasChildActivity: false
            },
            {
                name: "Mailbox",
                icon: <HiOutlineMail />,
                hasChildActivity: false,
                notification: 12
            },
            {
                name: "Special Pages",
                icon: <RiPagesLine />,
                hasChildActivity: true
            },
            {
                name: "UI Elements",
                icon: <FaRegPaperPlane />,
                hasChildActivity: true
            },
            {
                name: "Forms",
                icon: <FaWpforms />,
                hasChildActivity: true
            },
            {
                name: "Tables",
                icon: <FiDatabase />,
                hasChildActivity: true
            },
            {
                name: "Charts",
                icon: <BsBarChart />,
                hasChildActivity: true
            },
            {
                name: "Blog",
                icon: <BsPencil />,
                hasChildActivity: true
            }
        ]
        setActivities(activitiesArray);
    }, [])

    return (
        <div className={'sidebar ' + (showSidebar ? "show" : "")}>
            <div className='sidebar__user'>
                <div className="sidebar-close"  onClick={() => setShowSidebar(false)}>
                    <AiOutlineClose />
                </div>
                <div className='sidebar__user-avatar'>
                    <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' alt='avatar' />
                    {
                        userOnline && <div className="user-online"></div>
                    }
                </div>
                <div className='sidebar__user-name'>
                    <span>Hello, <strong>{userName.split(" ")[0]}</strong> {userName.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className='sidebar__user-actions'>
                    <div className="action-wrapper">
                        <BiUser />
                    </div>
                    <div className="action-wrapper">
                        <BiWrench />
                    </div>
                    <div className="action-wrapper">
                        <AiOutlinePoweroff />
                    </div>
                </div>
            </div>
            <div className='sidebar__activities'>
                {
                    activities.map((activity, index) => {
                        let active = index === activeIndex ? "active" : "";
                        return (
                            <Activity
                                key={index}
                                name={activity.name}
                                icon={activity.icon}
                                hasChildActivity={activity.hasChildActivity}
                                isActive={active}
                                notification={activity.notification}
                                onClick={() => setActiveIndex(index)}
                            />
                        )
                    })
                }
            </div>
            <div className='sidebar__properties'>

                {
                    properties.map((property, index) => {
                        return (
                            <div className="properties-wrapper" key={index}>
                                <div className="properties-header">
                                    <span>{property.name}</span>
                                    <span>{property.value}</span>
                                </div>
                                <div className="properties-progress-wrapper">
                                    <div className="properties-progress" style={{ width: property.value, background: property.color }}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar