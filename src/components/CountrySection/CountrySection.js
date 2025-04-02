import React, { useState } from 'react';
import CountryList from '../../api/country'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';




const CountrySection = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }


    return (

        <section className={`country pt-[2rem] sm:pt-[4rem] pb-[2rem] sm:pb-[4rem] ${props.pClass}`}>
            <div className="container">
                <div className="row mb-2 sm:mb-[3rem] mx-1 align-items-center">
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <h3 className="wow skewIn mb-2 sm:mb-[2rem] text-[1.35rem] sm:text-4xl font font-bold">Make Your Choice for the <br /> <span className='text-gray-500'>Preferred Nation</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="sec-title mb-20">
                            <div className='text-base'>Choosing the ideal destination for immigration is a pivotal decision that can shape the trajectory of your </div>
                        </div>
                    </div>
                </div>
                <Nav tabs className="xb-country-nav nav nav-tabs ul_li_between mb-4 sm:mb-[3rem]">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Europe
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            North America
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Asia
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >

                            Latin America
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >

                            Oceania
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '6' })}
                            onClick={() => { toggle('6'); }}
                        >

                            Africa
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '7' })}
                            onClick={() => { toggle('7'); }}
                        >

                            Antarctica
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className="xb-country ul_li">
                            {CountryList.slice(0, 12).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="xb-country ul_li">
                            {CountryList.slice(2, 14).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="xb-country ul_li">
                            {CountryList.slice(4, 16).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="xb-country ul_li">
                            {CountryList.slice(6, 18).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="5">
                        <div className="xb-country ul_li">
                            {CountryList.slice(0, 12).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="6">
                        <div className="xb-country ul_li">
                            {CountryList.slice(2, 14).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                    <TabPane tabId="7">
                        <div className="xb-country ul_li">
                            {CountryList.slice(4, 16).map((country, cnt) => (
                                <div className="xb-item--item" key={cnt}>
                                    <div className="xb-item--inner ul_li">  {/* onClick={ClickHandler} to={`/country-single/${country.slug}`} */}
                                        <div className='flex flex-col sm:flex-row sm:items-center '>
                                            <div className="xb-item--flag">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </section>
    )
}

export default CountrySection;