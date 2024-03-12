import { Avatar, Hidden } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICDashboardActive, logo, ICDashboardDefault, ICOrdersActive, ICOrdersDefault, ICStatisticsActive, ICStatisticsDefault, ICProductsActive, ICProductsDefault, ICOffersActive, ICOffersDefault, ICSettingsActive, ICSettingsDefault, ICContactUsActive, ICContactUsDefault } from '../assets/images';
import { Scrollbars } from 'react-custom-scrollbars';

function Sidebar() {
    return (
        <>
            {/* Main Navigation Start */}
            <nav className="main-navigation">

                <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} className="sidebar-custom-sccroll">
                    <Link to={'Login'} title="Company Name" className="logo">
                        <Avatar variant="square" src={logo} alt="Company Name" />
                    </Link>
                    <ul>
                        <li>
                            <Link to={'Dashboard'} title="Dashboard" className="active">
                                <Avatar variant="square" src={ICDashboardDefault} className="default-icon" alt="Dashboard" />
                                <Avatar variant="square" src={ICDashboardActive} className="active-icon" alt="Dashboard" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'Innerpage'} title="Orders">
                                <Avatar variant="square" src={ICOrdersDefault} className="default-icon" alt="Orders" />
                                <Avatar variant="square" src={ICOrdersActive} className="active-icon" alt="Orders" />
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Orders">
                                <Avatar variant="square" src={ICStatisticsDefault} className="default-icon" alt="Statistics" />
                                <Avatar variant="square" src={ICStatisticsActive} className="active-icon" alt="Statistics" />
                                <span>Statistics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Products">
                                <Avatar variant="square" src={ICProductsDefault} className="default-icon" alt="Products" />
                                <Avatar variant="square" src={ICProductsActive} className="active-icon" alt="Products" />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Offers">
                                <Avatar variant="square" src={ICOffersDefault} className="default-icon" alt="Offers" />
                                <Avatar variant="square" src={ICOffersActive} className="active-icon" alt="Offers" />
                                <span>Offers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} title="Settings">
                                <Avatar variant="square" src={ICSettingsDefault} className="default-icon" alt="Settings" />
                                <Avatar variant="square" src={ICSettingsActive} className="active-icon" alt="Settings" />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <Hidden mdUp>
                            <li>
                                <Link to={'/'} title="Contact us">
                                    <Avatar variant="square" src={ICContactUsDefault} className="default-icon" alt="Contact Us" />
                                    <Avatar variant="square" src={ICContactUsActive} className="active-icon" alt="Contact Us" />
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </Hidden>
                    </ul>
                </Scrollbars>
                <Hidden smDown>
                    <Link to={'/'} title="Contact us" className="bottom-link">
                        <Avatar variant="square" src={ICContactUsDefault} className="default-icon" alt="Contact Us" />
                        <Avatar variant="square" src={ICContactUsActive} className="active-icon" alt="Contact Us" />
                        <span>Contact Us</span>
                    </Link>
                </Hidden>
            </nav>
            <div className="overlay" onClick={() => document.body.classList.remove('open-menu')}></div>
            {/* Main Navigation End */}
        </>
    );
};
export default Sidebar;