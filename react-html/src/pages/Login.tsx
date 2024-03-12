import { Avatar, Button, Grid, Hidden, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICPassword, ICUsername, LoginBG, LoginLogo } from '../assets/images';
import { Helmet } from 'react-helmet';

function Login() {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {/* Login Wrapper Start */}
            <div className="login-wrapper">
                <Grid container>
                    <Grid item xs>

                        {/* Left Part Start */}
                        <div className="login-left">
                            <Link to={'Login'} title="Company Logo" className="logo">
                                <Avatar variant="square" src={LoginLogo} />
                            </Link>
                            <form action="#" className="login-form">
                                <Typography variant="h3">Welcome to Company!</Typography>
                                <Typography variant="h5">Please login to your account</Typography>
                                <div className="form-control">
                                    <TextField label="Username" variant="outlined" />
                                    <Avatar variant="square" src={ICUsername} />
                                </div>
                                <div className="form-control">
                                    <TextField label="Password" variant="outlined" type="password" />
                                    <Avatar variant="square" className="password-icon" src={ICPassword} />
                                </div>
                                <div className="middle">
                                    <Button variant="contained" color="primary" to="/Dashboard" component={Link} disableElevation>Login</Button>
                                    <Link to={'Login'} title="Login" className="forgot-link">Forgot Password?</Link>
                                </div>
                                <Typography variant="body1">Don’t have an account?<Link to={'Login'} title="Sign Up">Sign Up</Link></Typography>
                            </form>
                        </div>
                    </Grid>
                    {/* Left Part End */}

                    {/* Right Part Start */}
                    <Hidden xsDown>
                        <Grid item xs>
                            <div className="login-right">
                                <div className="banner">
                                    <Avatar variant="square" src={LoginBG} alt="We are here" />
                                </div>
                                <div className="content">
                                    <Typography variant="h3">We are here!</Typography>
                                    <Typography variant="body1">Lorem ipsum dolor sit amet concectetur.</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Hidden>
                    {/* Right Part End */}
                </Grid>
            </div>
            {/* Login Wrapper End */}
        </>
    );
};

export default Login;