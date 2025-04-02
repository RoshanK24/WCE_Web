import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Immigration',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Studient Visa',
        //         link: '/home-studient-visa'
        //     }, 
        // ]
    },
    {
        id: 1,
        title: 'EduExpo 2K25',
        link: '/eduexpo',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Immigration',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Studient Visa',
        //         link: '/home-studient-visa'
        //     }, 
        // ]
    },
    {
        id: 3,
        title: 'Destinations',
        link: '/destinations',
    },
    {
        id: 4,
        title: 'About Us',
        link: '/about',
    },
    // {
    //     id: 5,
    //     title: 'Country',
    //     link: '/country',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Country',
    //             link: '/country'
    //         },
    //         {
    //             id: 52,
    //             title: 'Country Details',
    //             link: '/country-single/Australia'
    //         }
    //     ]
    // },
    // {
    //     id: 6,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 61,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 62,
    //             title: 'Blog Details',
    //             link: '/blog-single/Cultural-adjustment-thriving-in-a-new-country'
    //         },
    //     ]
    // },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="subMenu">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                to={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;