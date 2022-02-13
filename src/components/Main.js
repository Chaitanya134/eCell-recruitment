import React, { useState, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearch, BsBell, BsTwitter, BsWhatsapp, BsFillExclamationTriangleFill } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { TiContacts } from "react-icons/ti"
import { GrApps } from "react-icons/gr"
import { FaFacebookF, FaServer, FaMapMarkerAlt, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { RiDownload2Fill } from "react-icons/ri"
import { VscGraph } from "react-icons/vsc"
import { GiRadioTower } from "react-icons/gi"

const Main = ({ setShowSidebar }) => {

    const [dashboardData, setDashboardData] = useState([]);
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        const data = [
            {
                title: "Sales",
                data: "74,531",
                icon: <RiDownload2Fill />,
                color: "blue"
            },
            {
                title: "Bounce Rate",
                data: "53%",
                icon: <VscGraph />,
                color: "primary"
            },
            {
                title: "Server Status",
                data: "45%",
                icon: <FaServer />,
                color: "dark-blue"
            },
            {
                title: "Signal Status",
                data: "Good",
                icon: <GiRadioTower />,
                color: "red"
            }
        ]
        setDashboardData(data);
    }, [])

    useEffect(() => {
        const data = [
            {
                Country: "USA",
                Visitors: [4, 6, -6, -6, -8, 7, 8, 5, 7, 6],
                OS: 209,
                Status: -1
            },
            {
                Country: "India",
                Visitors: [4, 5, 5, 1, 3, -2, -6, -4, 9, 6],
                OS: 131,
                Status: 1
            },
            {
                Country: "Britain",
                Visitors: [-3, -4, -5, 5, 8, 10, 8, 9, 10, 8],
                OS: 19,
                Status: 0
            },
            {
                Country: "Brazil",
                Visitors: [2, 3, 4, -4, -7, -5, 8, 6, 5, 6],
                OS: 109,
                Status: -1
            },
            {
                Country: "China",
                Visitors: [4, 5, 6, 6, 9, 8, -6, -5, -3, 4],
                OS: 192,
                Status: 1
            },
            {
                Country: "Australia",
                Visitors: [4, 5, 7, 8, 10, 9, 10, -4, -8, -6],
                OS: 1709,
                Status: -1
            }
        ]
        setVisitors(data);
    }, [])

    return (
        <div className='main'>
            <div className="main__header">
                <div>
                    <div className="sidebar-toggle-container">
                        <div className="sidebar-toggle" onClick={() => setShowSidebar(prev => !prev)}>
                            <div className="menu-bar"></div>
                            <div className="menu-bar"></div>
                            <div className="menu-bar"></div>
                        </div>
                    </div>
                    <div className="logo">BONANZOOKA</div>
                    <div className="search-wrapper">
                        <input type="text" name="search" id="search" placeholder='Search...' />
                        <BsSearch />
                    </div>
                </div>
                <div>
                    <div className="email-wrapper">
                        <HiOutlineMail />
                        <div className="notif-count">4</div>
                    </div>
                    <div className="notif-wrapper">
                        <BsBell />
                        <div className="notif-count">10</div>
                    </div>
                    <div className="contact-wrapper">
                        <TiContacts />
                        <div className="notif-count">9</div>
                    </div>
                    <div className="more-options-wrapper">
                        <GrApps />
                    </div>
                </div>
            </div>
            <div className="main__body">
                <div className="breadcrumb">
                    <div className="home-icon">
                        <AiOutlineHome />
                    </div>
                    <span>/</span>
                    <span className='url'>Dashboard</span>

                </div>

                <div className="cards">
                    {
                        dashboardData.map((item, index) => {
                            return (
                                <div className={"card " + item.color} key={index}>
                                    <div className="content">
                                        <div className="data">{item.data}</div>
                                        <div className="title">{item.title}</div>
                                    </div>
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="widgets">
                    <div className="world-map">
                        <img src="assets/map.png" alt="World Map" />
                        <div className="zoom-container">
                            <div className="zoom--in">+</div>
                            <div className="zoom--out">-</div>
                        </div>
                    </div>
                    <div className="table-container">
                        <div className="table-container-header">
                            <FaMapMarkerAlt />
                            <span>Visitors</span>
                        </div>
                        <div className="table-container-body">
                            <div className='table-header'>
                                {
                                    visitors.length > 0 &&
                                    Object.keys(visitors[0]).map((visitorField, index) => {
                                        return (
                                            <div key={index}>
                                                {visitorField}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='table-body'>
                                {
                                    visitors.length > 0 &&
                                    visitors.map((visitor, index) => {
                                        return (
                                            Object.keys(visitor).map((key, index) => {
                                                let value = visitor[key];
                                                if (key === 'Status') {
                                                    if (value === -1) {
                                                        value = <BsFillExclamationTriangleFill className='error' />
                                                    } else if (value === 0) {
                                                        value = <FaRegThumbsDown className='bad' />
                                                    } else {
                                                        value = <FaRegThumbsUp className='good' />
                                                    }
                                                }
                                                return (
                                                    <div key={index} className={key.toLowerCase()}>
                                                        {
                                                            key === 'Visitors' ?
                                                                value.map((visit, index) => {
                                                                    return (
                                                                        <div
                                                                            key={index}
                                                                            className={visit > 0 ? 'positive' : 'negative'}
                                                                            style={{
                                                                                position: 'relative',
                                                                                height: Math.abs(visit) + "px",
                                                                                top: visit > 0 ? '' : Math.abs(visit) + 'px'
                                                                            }}
                                                                        >
                                                                        </div>
                                                                    )
                                                                })
                                                                : value
                                                        }
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="main__footer">
                <div>
                    <div className="social-media-container">
                        <div className="facebook">
                            <FaFacebookF />
                        </div>
                        <div className="twitter">
                            <BsTwitter />
                        </div>
                        <div className="whatsapp">
                            <BsWhatsapp />
                        </div>
                    </div>
                    <div className="made-by">
                        <span>Made with <span className='heart' >❤</span> by <span className="name">Chaitanya Giri</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main