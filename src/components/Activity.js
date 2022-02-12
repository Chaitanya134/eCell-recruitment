import React from 'react'
import { IoIosArrowBack } from "react-icons/io"

const Activity = ({ name, icon, hasChildActivity, isActive, notification, onClick }) => {
    return (
        <div className={"activity-wrapper " + (isActive ? "active" : "")} onClick={onClick}>
            <div className={'activity'}>
                <div className="activity-title">
                    {icon}
                    <span>{name}</span>
                </div>
                {
                    notification && <div className="activity-notification">{notification}</div>
                }
                {
                    hasChildActivity && <IoIosArrowBack className='dropdown-icon' />
                }
            </div>
            {
                hasChildActivity && 
                <div className='dropdown-menu'>
                    <div className='activity dropdown-item'>{name} 1</div>
                    <div className='activity dropdown-item'>{name} 2</div>
                </div>
            }
        </div>
    )
}

export default Activity