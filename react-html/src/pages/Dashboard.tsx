import {
  Avatar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  ICBoosted,
  ICForSale,
  ICOverview,
  ICVideo,
  ICWip,
  MonthlyVisitors,
  DailyVisitors,
  CountryUsersGraph,
  ICAction,
  ICFilter,
  IDownArrow,
} from "../assets/images";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet";

function Dashboard() {
  // Menu
  const [menuEl1, setMenuEl1] = React.useState<null | HTMLElement>(null);
  const menuClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl1(event.currentTarget);
  };
  const menuClose1 = () => {
    setMenuEl1(null);
  };

  const [menuEl2, setMenuEl2] = React.useState<null | HTMLElement>(null);
  const menuClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl2(event.currentTarget);
  };
  const menuClose2 = () => {
    setMenuEl2(null);
  };

  const [menuEl3, setMenuEl3] = React.useState<null | HTMLElement>(null);
  const menuClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl3(event.currentTarget);
  };
  const menuClose3 = () => {
    setMenuEl3(null);
  };

  const [menuEl4, setMenuEl4] = React.useState<null | HTMLElement>(null);
  const menuClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl4(event.currentTarget);
  };
  const menuClose4 = () => {
    setMenuEl4(null);
  };

  const [menuEl5, setMenuEl5] = React.useState<null | HTMLElement>(null);
  const menuClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl5(event.currentTarget);
  };
  const menuClose5 = () => {
    setMenuEl5(null);
  };

  const [menuEl6, setMenuEl6] = React.useState<null | HTMLElement>(null);
  const menuClick6 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl6(event.currentTarget);
  };
  const menuClose6 = () => {
    setMenuEl6(null);
  };

  const [menuEl7, setMenuEl7] = React.useState<null | HTMLElement>(null);
  const menuClick7 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl7(event.currentTarget);
  };
  const menuClose7 = () => {
    setMenuEl7(null);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* Wrapper Start */}
      <div className="wrapper">
        <Sidebar />

        <Header />

        <main className="main-content">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              {/* Left Content Start */}
              <div className="left-content">
                <div className="boxes">
                  <Grid container spacing={3}>
                    <Grid item xs={6} sm={4} md>
                      <Link
                        to={"/"}
                        title="Overview"
                        className="link-box light-purple"
                      >
                        <Avatar
                          variant="square"
                          src={ICOverview}
                          alt="Overview"
                        />
                        <span>Overview</span>
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md>
                      <Link
                        to={"/"}
                        title="Videos"
                        className="link-box light-snow"
                      >
                        <Avatar variant="square" src={ICVideo} alt="Videos" />
                        <span>Videos</span>
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md>
                      <Link
                        to={"/"}
                        title="WIP"
                        className="link-box light-lace"
                      >
                        <Avatar variant="square" src={ICWip} alt="WIP" />
                        <span>WIP</span>
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md>
                      <Link
                        to={"/"}
                        title="For Sale"
                        className="link-box light-frost"
                      >
                        <Avatar
                          variant="square"
                          src={ICForSale}
                          alt="For Sale"
                        />
                        <span>For Sale</span>
                      </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md>
                      <Link
                        to={"/"}
                        title="Boosted"
                        className="link-box light-coconut"
                      >
                        <Avatar
                          variant="square"
                          src={ICBoosted}
                          alt="Boosted"
                        />
                        <span>Boosted</span>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                <div className="primary-box">
                  <div className="top-box pb-36">
                    <div className="content">
                      <Typography variant="h4" className="pb-0">
                        Daily Visitors
                      </Typography>
                      <span className="text-grey">Today vs Yesterday</span>
                    </div>
                    <Grid container spacing={3} className="chart-wrapper">
                      <Grid item xs="auto">
                        <div className="chart-legend">
                          <span className="blue-bg"></span>
                          <em>Yesterday</em>
                        </div>
                      </Grid>
                      <Grid item xs="auto">
                        <div className="chart-legend">
                          <span className="yellow-bg"></span>
                          <em>Today</em>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <Avatar
                    variant="square"
                    src={DailyVisitors}
                    alt="Daily Visitors"
                    className="img-fluid"
                  />
                </div>

                {/* Datatable Start */}
                <Typography variant="h4" className="pb-0">
                  Past Orders
                </Typography>
                <span className="text-grey pb-8">
                  Orders that are Delivered
                </span>
                <TableContainer className="datatable">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Order Description</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Order Date</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>12346</TableCell>
                        <TableCell>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit
                        </TableCell>
                        <TableCell align="center">5</TableCell>
                        <TableCell align="center">12-05-2021</TableCell>
                        <TableCell align="center">
                          <Button aria-haspopup="true" onClick={menuClick1}>
                            <Avatar
                              variant="square"
                              src={ICAction}
                              alt="Action"
                            />
                          </Button>
                          <Menu
                            anchorEl={menuEl1}
                            keepMounted
                            open={Boolean(menuEl1)}
                            onClose={menuClose1}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            classes={{
                              paper: "primary-menu",
                            }}
                          >
                            <MenuItem onClick={menuClose1}>Action 1</MenuItem>
                            <MenuItem onClick={menuClose1}>Action 2</MenuItem>
                            <MenuItem onClick={menuClose1}>Action 3</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>12347</TableCell>
                        <TableCell>
                          Lorem ipsum dolor sit amet consectetur elit
                        </TableCell>
                        <TableCell align="center">2</TableCell>
                        <TableCell align="center">11-04-2021</TableCell>
                        <TableCell align="center">
                          <Button aria-haspopup="true" onClick={menuClick2}>
                            <Avatar
                              variant="square"
                              src={ICAction}
                              alt="Action"
                            />
                          </Button>
                          <Menu
                            anchorEl={menuEl2}
                            keepMounted
                            open={Boolean(menuEl2)}
                            onClose={menuClose2}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            classes={{
                              paper: "primary-menu",
                            }}
                          >
                            <MenuItem onClick={menuClose2}>Action 1</MenuItem>
                            <MenuItem onClick={menuClose2}>Action 2</MenuItem>
                            <MenuItem onClick={menuClose2}>Action 3</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>12348</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet</TableCell>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">23-03-2021</TableCell>
                        <TableCell align="center">
                          <Button aria-haspopup="true" onClick={menuClick3}>
                            <Avatar
                              variant="square"
                              src={ICAction}
                              alt="Action"
                            />
                          </Button>
                          <Menu
                            anchorEl={menuEl3}
                            keepMounted
                            open={Boolean(menuEl3)}
                            onClose={menuClose3}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            classes={{
                              paper: "primary-menu",
                            }}
                          >
                            <MenuItem onClick={menuClose3}>Action 1</MenuItem>
                            <MenuItem onClick={menuClose3}>Action 2</MenuItem>
                            <MenuItem onClick={menuClose3}>Action 3</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>123459</TableCell>
                        <TableCell>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit
                        </TableCell>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">17-03-2021</TableCell>
                        <TableCell align="center">
                          <Button aria-haspopup="true" onClick={menuClick4}>
                            <Avatar
                              variant="square"
                              src={ICAction}
                              alt="Action"
                            />
                          </Button>
                          <Menu
                            anchorEl={menuEl4}
                            keepMounted
                            open={Boolean(menuEl4)}
                            onClose={menuClose4}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            classes={{
                              paper: "primary-menu",
                            }}
                          >
                            <MenuItem onClick={menuClose4}>Action 1</MenuItem>
                            <MenuItem onClick={menuClose4}>Action 2</MenuItem>
                            <MenuItem onClick={menuClose4}>Action 3</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>123460</TableCell>
                        <TableCell>
                          Lorem ipsum dolor sit amet consectetur
                        </TableCell>
                        <TableCell align="center">2</TableCell>
                        <TableCell align="center">28-02-2021</TableCell>
                        <TableCell align="center">
                          <Button aria-haspopup="true" onClick={menuClick5}>
                            <Avatar
                              variant="square"
                              src={ICAction}
                              alt="Action"
                            />
                          </Button>
                          <Menu
                            anchorEl={menuEl5}
                            keepMounted
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            open={Boolean(menuEl5)}
                            onClose={menuClose5}
                            classes={{
                              paper: "primary-menu",
                            }}
                          >
                            <MenuItem onClick={menuClose5}>Action 1</MenuItem>
                            <MenuItem onClick={menuClose5}>Action 2</MenuItem>
                            <MenuItem onClick={menuClose5}>Action 3</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* Datatable End */}
              </div>
              {/* Left Content End */}
            </Grid>

            <Grid item xs={12} lg={4}>
              {/* Right Content Start */}
              <div className="right-content">
                <div className="top-box pb-4">
                  <Typography variant="h4" className="pb-0">
                    Monthly Visitors
                  </Typography>
                  <Button
                    aria-haspopup="true"
                    onClick={menuClick6}
                    className="ml-auto filter-toggle"
                  >
                    <Avatar variant="square" src={ICFilter} alt="Filter" />
                  </Button>
                  <Menu
                    anchorEl={menuEl6}
                    keepMounted
                    open={Boolean(menuEl6)}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    onClose={menuClose6}
                    classes={{
                      paper: "primary-menu",
                    }}
                  >
                    <MenuItem onClick={menuClose6}>Item One</MenuItem>
                    <MenuItem onClick={menuClose6}>Item Two</MenuItem>
                    <MenuItem onClick={menuClose6}>Item Three</MenuItem>
                  </Menu>
                </div>
                <div className="top-content">
                  <Typography variant="h3" className="pb-8 fw-900">
                    1,17,450
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs="auto">
                      <span className="text-grey">Likes / Follows</span>
                    </Grid>
                    <Grid item xs="auto">
                      <span className="text-grey">24,932 / 5,724</span>
                    </Grid>
                  </Grid>
                </div>
                <div className="primary-box">
                  <Button
                    aria-haspopup="true"
                    onClick={menuClick7}
                    className="ml-auto views-toggle"
                  >
                    <span>views</span>
                    <Avatar variant="square" src={IDownArrow} alt="Views" />
                  </Button>
                  <Menu
                    anchorEl={menuEl7}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    keepMounted
                    open={Boolean(menuEl7)}
                    onClose={menuClose7}
                    classes={{
                      paper: "primary-menu",
                    }}
                  >
                    <MenuItem onClick={menuClose7}>Item One</MenuItem>
                    <MenuItem onClick={menuClose7}>Item Two</MenuItem>
                    <MenuItem onClick={menuClose7}>Item Three</MenuItem>
                  </Menu>
                  <Avatar
                    variant="square"
                    src={MonthlyVisitors}
                    alt="Monthly Visitors"
                    className="img-fluid"
                  />
                </div>
                <div className="primary-box country-box mb-0 bb-0">
                  <Typography variant="h4" className="pb-0">
                    By Country
                  </Typography>
                  <span className="text-grey">Top Users By Country</span>
                  <Avatar
                    variant="square"
                    src={CountryUsersGraph}
                    alt="Users By Country"
                    className="img-fluid"
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <div className="chart-legend">
                        <span className="light-blue-bg"></span>
                        <em>Less users than expected</em>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="chart-legend">
                        <span className="dark-yellow-bg"></span>
                        <em>As per expectation users</em>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="chart-legend">
                        <span className="purple-bg"></span>
                        <em>More users than expected</em>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              {/* Right Content Start */}
            </Grid>
          </Grid>
        </main>
      </div>
      {/* Wrapper End */}
    </>
  );
}
export default Dashboard;
