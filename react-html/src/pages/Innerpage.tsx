import { AppBar, Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ICAction, ICCheckbox, ICCheckboxCheked, ICRadio, ICRadioChecked, ICFileUpload } from '../assets/images';
import DropdownIcon from '../components/Dropdown-icon';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'

// Tabs
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className="panel-inner">
                    {children}
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Innerpage() {

    // Pagination
    const [page, setPage] = React.useState(5);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Select
    const [select, setSelect] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelect(event.target.value as string);
    };

    const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
    const multiSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMultiSelect(event.target.value as string[]);
    };
    const selectChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setMultiSelect(value);
    };

    // Checkbox
    const [checkbox, setcheckbox] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedc: true,
        checkedD: true,
    });
    const checkboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setcheckbox({ ...checkbox, [event.target.name]: event.target.checked });
    };

    // Radio
    const [radio, setRadio] = React.useState('option 1');
    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio((event.target as HTMLInputElement).value);
    };

    // Tabs
    const [tab, setTab] = React.useState(0);

    const tabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };

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
    return (
        <>
            <Helmet>
                <title>Innerpage</title>
            </Helmet>
            {/* Wrapper Start */}
            <div className="wrapper">

                <Sidebar />

                <Header />
                <main className="main-content">

                    {/* Datatable Start */}
                    <Typography variant="h4" className="pb-0">Orders</Typography>
                    <span className="text-grey pb-8">All Orders with Status</span>
                    <TableContainer className="datatable innerpage-table">
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order ID</TableCell>
                                    <TableCell>Order Description</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Order Date</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>12346</TableCell>
                                    <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit</TableCell>
                                    <TableCell align="center">5</TableCell>
                                    <TableCell align="center">12-05-2021</TableCell>
                                    <TableCell align="center">
                                        <span className="badge badge-success">Delivered</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button aria-haspopup="true" onClick={menuClick1}>
                                            <Avatar variant="square" src={ICAction} alt="Action" />
                                        </Button>
                                        <Menu
                                            anchorEl={menuEl1}
                                            keepMounted
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            open={Boolean(menuEl1)}
                                            onClose={menuClose1}
                                            classes={
                                                {
                                                    paper: "primary-menu"
                                                }
                                            }
                                        >
                                            <MenuItem onClick={menuClose1}>Action 1</MenuItem>
                                            <MenuItem onClick={menuClose1}>Action 2</MenuItem>
                                            <MenuItem onClick={menuClose1}>Action 3</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12347</TableCell>
                                    <TableCell>Lorem ipsum dolor sit amet consectetur elit</TableCell>
                                    <TableCell align="center">2</TableCell>
                                    <TableCell align="center">11-04-2021</TableCell>
                                    <TableCell align="center">
                                        <span className="badge badge-success">Delivered</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button aria-haspopup="true" onClick={menuClick2}>
                                            <Avatar variant="square" src={ICAction} alt="Action" />
                                        </Button>
                                        <Menu
                                            anchorEl={menuEl2}
                                            keepMounted
                                            open={Boolean(menuEl2)}
                                            onClose={menuClose2}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            classes={
                                                {
                                                    paper: "primary-menu"
                                                }
                                            }
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
                                        <span className="badge badge-warning">Pending</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button aria-haspopup="true" onClick={menuClick3}>
                                            <Avatar variant="square" src={ICAction} alt="Action" />
                                        </Button>
                                        <Menu
                                            anchorEl={menuEl3}
                                            keepMounted
                                            open={Boolean(menuEl3)}
                                            onClose={menuClose3}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            classes={
                                                {
                                                    paper: "primary-menu"
                                                }
                                            }
                                        >
                                            <MenuItem onClick={menuClose3}>Action 1</MenuItem>
                                            <MenuItem onClick={menuClose3}>Action 2</MenuItem>
                                            <MenuItem onClick={menuClose3}>Action 3</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>123459</TableCell>
                                    <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit</TableCell>
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">17-03-2021</TableCell>
                                    <TableCell align="center">
                                        <span className="badge badge-warning">Pending</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button aria-haspopup="true" onClick={menuClick4}>
                                            <Avatar variant="square" src={ICAction} alt="Action" />
                                        </Button>
                                        <Menu
                                            anchorEl={menuEl4}
                                            keepMounted
                                            open={Boolean(menuEl4)}
                                            onClose={menuClose4}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            classes={
                                                {
                                                    paper: "primary-menu"
                                                }
                                            }
                                        >
                                            <MenuItem onClick={menuClose4}>Action 1</MenuItem>
                                            <MenuItem onClick={menuClose4}>Action 2</MenuItem>
                                            <MenuItem onClick={menuClose4}>Action 3</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>123460</TableCell>
                                    <TableCell>Lorem ipsum dolor sit amet consectetur</TableCell>
                                    <TableCell align="center">2</TableCell>
                                    <TableCell align="center">28-02-2021</TableCell>
                                    <TableCell align="center">
                                        <span className="badge badge-danger">Cancelled</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button aria-haspopup="true" onClick={menuClick5}>
                                            <Avatar variant="square" src={ICAction} alt="Action" />
                                        </Button>
                                        <Menu
                                            anchorEl={menuEl5}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            keepMounted
                                            open={Boolean(menuEl5)}
                                            onClose={menuClose5}
                                            classes={
                                                {
                                                    paper: "primary-menu"
                                                }
                                            }
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

                    <TablePagination
                        component="div"
                        count={100}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                    {/* Form Elements Start */}
                    <Typography variant="h4" className="pb-24">Form Elements</Typography>
                    <TextField label="Name" variant="outlined" className="mb-24" />
                    <FormControl variant="outlined" className="mb-24">
                        <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={select}
                            onChange={handleChange}
                            label="Dropdown"
                            IconComponent={DropdownIcon}
                            MenuProps={{
                                classes: {
                                    paper: "primary-menu"
                                }
                            }}
                        >
                            <MenuItem value={10}>Option 1</MenuItem>
                            <MenuItem value={20}>Option 2</MenuItem>
                            <MenuItem value={30}>Option 3</MenuItem>
                            <MenuItem value={40}>Option 4</MenuItem>
                            <MenuItem value={50}>Option 5</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        className="mb-20"
                        id="outlined-multiline-static"
                        label="Textarea"
                        multiline
                        rows={3}
                        variant="outlined"
                    />
                    <Typography variant="h6" className="pb-16">Two Column</Typography>
                    <Grid container spacing={3} className="mb-8">
                        <Grid item xs={12} sm={6}>
                            <TextField label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Disabled" variant="outlined" disabled defaultValue="Hello World" />
                        </Grid>
                    </Grid>
                    <Typography variant="h6" className="pb-16">Three Column</Typography>
                    <Grid container spacing={3} className="mb-8">
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField label="Focus" variant="outlined" defaultValue="Lorem ipsum" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" className="pb-16">Four Column</Typography>
                    <Grid container spacing={3} className="mb-8">
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField label="Textbox" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField label="Textbox" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField label="Focus" variant="outlined" defaultValue="Focus" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Multiselect</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={multiSelect}
                                    onChange={multiSelectChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    multiple
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={select}
                                    onChange={handleChange}
                                    label="Dropdown"
                                    IconComponent={DropdownIcon}
                                    MenuProps={{
                                        classes: {
                                            paper: "primary-menu"
                                        }
                                    }}
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                    <MenuItem value={40}>Option 4</MenuItem>
                                    <MenuItem value={50}>Option 5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" className="pb-16">Other Form Elements</Typography>
                    <Typography variant="body1" className="pb-16">File Upload</Typography>
                    <div className="file-upload">
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span" disableElevation>
                                <Avatar variant="square" src={ICFileUpload} alt="File Upload" />
                                <span>Choose File</span>
                            </Button>
                        </label>
                        <Typography variant="body1">No files selected</Typography>
                    </div>
                    <Typography variant="body1" className="pb-4">Checkbox</Typography>
                    <FormGroup row className="pb-14">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<Avatar variant="square" src={ICCheckbox} alt="Checked" />}
                                    checkedIcon={<Avatar variant="square" src={ICCheckboxCheked} alt="Checked" />}
                                    checked={checkbox.checkedA}
                                    onChange={checkboxChange}
                                    name="checkedA"
                                    color="primary"
                                />
                            }
                            label="Option 1"
                        />
                        <FormControlLabel
                            control={

                                <Checkbox
                                    icon={<Avatar variant="square" src={ICCheckbox} alt="Checked" />}
                                    checkedIcon={<Avatar variant="square" src={ICCheckboxCheked} alt="Checked" />}
                                    checked={checkbox.checkedB}
                                    onChange={checkboxChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Option 2"
                        />
                    </FormGroup>
                    <Typography variant="body1" className="pb-4">Radio Buttons</Typography>
                    <RadioGroup aria-label="gender" name="gender1" value={radio} onChange={radioChange} row className="pb-10">
                        <FormControlLabel value="option 1"
                            control={
                                <Radio
                                    icon={<Avatar variant="square" src={ICRadio} alt="Checked" />}
                                    checkedIcon={<Avatar variant="square" src={ICRadioChecked} alt="Checked" />}
                                    color="primary"
                                />
                            } label="Option 1" />
                        <FormControlLabel value="option 2"
                            control={
                                <Radio
                                    icon={<Avatar variant="square" src={ICRadio} alt="Checked" />}
                                    checkedIcon={<Avatar variant="square" src={ICRadioChecked} alt="Checked" />}
                                    color="primary"
                                />
                            } label="Option 2" />
                    </RadioGroup>
                    <div className="buttons">
                        <Button variant="contained" color="primary" disableElevation>Primary</Button>
                        <Button variant="outlined" color="secondary">Secondary</Button>
                    </div>
                    <Typography variant="h4" className="pb-16">Tabs</Typography>
                    <AppBar position="static">
                        <Tabs value={tab} onChange={tabChange} scrollButtons="auto" aria-label="simple tabs example">
                            <Tab label="Option 1" {...a11yProps(0)} />
                            <Tab label="Option 2" {...a11yProps(1)} />
                            <Tab label="Option 3" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={tab} index={0}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a varius nulla. Proin accumsan nunc lacinia ipsum venenatis varius. Proin rutrum, diam id facilisis hendrerit, dui est malesuada risus, sed sollicitudin felis eros vitae libero. Integer in magna lectus. Vestibulum facilisis ultrices libero sed tincidunt. Nullam vitae mollis diam, eu posuere diam. Suspendisse potenti. Proin pellentesque egestas justo a tempor. Donec lorem sem, dictum at consequat et, maximus quis mauris. Mauris leo elit, scelerisque a lorem vitae, dignissim sodales dolor. In hac habitasse platea dictumst.
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis ipsa quae voluptates hic. Magni placeat velit laboriosam esse dolor!
                    </TabPanel>
                    <TabPanel value={tab} index={2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores impedit deserunt, soluta velit fugit est facilis aut dignissimos rerum non quam vero exercitationem possimus voluptatum! Assumenda voluptatum, totam beatae pariatur quam labore illo ipsum eos nihil ullam delectus eveniet veritatis distinctio molestiae, officia ea quis asperiores vitae numquam tempore eum?
                    </TabPanel>
                    {/* Form Elements End */}
                </main>
            </div>
            {/* Wrapper End */}
        </>
    );
};
export default Innerpage;