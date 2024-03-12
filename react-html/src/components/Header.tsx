import { Avatar, Button, Hidden, IconButton, InputAdornment, Popover, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICSearch, IDownArrow, ICChangePassword, ICBell, ICLogout, ICProfile, ICSetting, user1, user2, user3, user4, userProfile } from '../assets/images';

function Header() {

    // Notification Menu
    const [notificationDropdown, setNotificationDropdown] = React.useState<null | HTMLElement>(null);
    const notifiationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNotificationDropdown(event.currentTarget);
    };
    const notifiationClose = () => {
        setNotificationDropdown(null);
    };

    // User Menu
    const [userDropdown, setUserDropdown] = React.useState<null | HTMLElement>(null);
    const userClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setUserDropdown(event.currentTarget);
    };
    const userClose = () => {
        setUserDropdown(null);
    };

    return (
        <>
            {/* Header Start */}
            <header className="header">
                <Hidden mdUp>
                    <Button className="toggle-btn" onClick={() => document.body.classList.toggle('open-menu')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Button>
                </Hidden>
                <div className="search-panel">
                    <TextField
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <Avatar variant="square" src={ICSearch} alt="Search" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <Button aria-haspopup="true" onClick={notifiationClick} className="notification-toggle">
                    <Avatar variant="square" src={ICBell} alt="Notifications" />
                    <span>2</span>
                </Button>
                <Popover
                    anchorEl={notificationDropdown}
                    keepMounted
                    open={Boolean(notificationDropdown)}
                    onClose={notifiationClose}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    PaperProps={{
                        className: 'notification-menu'
                    }}
                >
                    <Typography variant="body1">NOTIFICATION</Typography>
                    <ul>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user1} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user2} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user3} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user4} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user1} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                        <li onClick={notifiationClose}>
                            <Link to={'/'} title="Notification">
                                <Avatar variant="square" src={user2} alt="User" />
                                <span className="notification-content">
                                    <i>Suzzeth Bungaos tagged you and
										18 others in a post</i>
                                    <small>Oct 3, 2017 9:00 PM</small>
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <Link to={'/'} title="Show All" className="show-all">
                        <span>Show All</span>
                        <Avatar variant="square" src={IDownArrow} alt="Show All" />
                    </Link>
                </Popover>
                <Button aria-haspopup="true" onClick={userClick} className="user-toggle">
                    <Avatar variant="square" src={userProfile} alt="User" />
                </Button>
                <Popover
                    anchorEl={userDropdown}
                    keepMounted
                    open={Boolean(userDropdown)}
                    onClose={userClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    PaperProps={{
                        className: 'user-menu'
                    }}
                >
                    <ul>
                        <li onClick={userClose}>
                            <Link to={'/'} title="Profile">
                                <Avatar variant="square" src={ICProfile} alt="Profile" />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li onClick={userClose}>
                            <Link to={'/'} title="Settings">
                                <Avatar variant="square" src={ICSetting} alt="Settings" />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li onClick={userClose}>
                            <Link to={'/'} title="Change Password">
                                <Avatar variant="square" src={ICChangePassword} alt="Change Password" />
                                <span>Change Password</span>
                            </Link>
                        </li>
                        <li onClick={userClose}>
                            <Link to={'Login'} title="Logout">
                                <Avatar variant="square" src={ICLogout} alt="Logout" />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </Popover>
            </header>
            {/* Header Start */}
        </>
    );
};
export default Header;