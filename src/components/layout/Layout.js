import React, {useState} from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useTheme} from '@mui/material/styles';
import {Link, useLocation} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeIcon from '@mui/icons-material/Home';

import {Main, AppBar, DrawerHeader, Footer} from './LayoutComponents';
import FooterContent from './FooterContent';
import MenuButton from './MenuButton';

import {appbarMenuButtonItems} from '../../appbarMenuButtonItems';
import {serviceList} from '../../serviceList';

const drawerWidth = 240;

export default function Layout({children}) {
    const {keycloak} = useKeycloak();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    // Define openCategories state
    const [openCategories, setOpenCategories] = useState({});

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        keycloak.logout();
    };

    const categories = ['General', 'I-ENEF', 'I-NET', 'I-DER', 'Technical Enablers'];

    const servicesByCategory = {};

    // Group services by categories
    categories.forEach((category) => {
        servicesByCategory[category] = [];
    });

    serviceList.forEach((service) => {
        const serviceCategories = service.categories ? service.categories.split(',').map((category) => category.trim()) : [];

        serviceCategories.forEach((category) => {
            if (categories.includes(category)) {
                if (!servicesByCategory[category]) {
                    servicesByCategory[category] = [];
                }
                servicesByCategory[category].push(service);
            }
        });
    });


    const handleCategoryClick = (category) => {
        setOpenCategories((prevState) => ({
            [category]: !prevState[category],
        }));
    };

    return (
        <>
            <Box sx={{display: 'flex', minHeight: `calc(100vh - 60px)`}}>
                <CssBaseline/>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, color: 'white', ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Stack direction={'row'}>
                            <Link to="/">
                                <img
                                    src="/images/aiod.svg"
                                    alt="AIoD logo"
                                    height={'60px'}
                                    style={{objectFit: 'cover', marginRight: '10px'}}
                                />
                            </Link>
                            <Link to="/">
                                <img
                                    src="/images/i-nergy_logo_trans_back.png"
                                    alt="I-NERGY logo"
                                    height={'60px'}
                                    style={{objectFit: 'cover'}}
                                />
                            </Link>
                        </Stack>

                        {keycloak.authenticated === true && (
                            <>
                                <Typography sx={{ml: 'auto'}} style={{color: 'white'}}>
                                    Welcome, {keycloak?.tokenParsed?.preferred_username}
                                </Typography>
                                <MenuButton subLinks={appbarMenuButtonItems} signout={handleSignOut}/>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {/* Homepage Link */}


                        {/* Render categories and services */}
                        <List>
                            <ListItem
                                sx={{
                                    background: location.pathname === '/' ? 'linear-gradient(to right, rgba(0, 71, 187), rgba(151, 169, 77))' : '',
                                    // border: location.pathname === '/' ? '1px solid rgba(151,169,77,1)' : '',
                                    // borderRadius: '10px',
                                    // margin: 1,
                                    width: '100%',
                                }}
                                key={'homepage'}
                                disablePadding
                                component={Link}
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon sx={{color: location.pathname === '/' ? 'white' : 'normal'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                fontWeight={800}
                                                variant={'body1'}
                                                align={'left'}
                                                color={location.pathname === '/' ? 'white' : 'normal'}
                                            >
                                                Homepage
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>

                            {categories.map((category) => (
                                <div key={category}>
                                    <ListItemButton
                                        onClick={() => handleCategoryClick(category)}
                                        sx={{
                                            background: openCategories[category] ? 'linear-gradient(to right, rgba(0, 71, 187), rgba(151, 169, 77))' : 'your-inactive-background-color',
                                            // border: openCategories[category] ? 'your-active-border' : 'your-inactive-border',
                                            // borderRadius: '10px',
                                            // margin: 1,
                                            width: '100%',
                                        }}
                                    >
                                        <ListItemIcon>
                                            <MenuIcon sx={{color: openCategories[category] ? 'white' : 'normal'}}/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    color={openCategories[category] ? 'white' : 'normal'}
                                                    variant="body1"
                                                    fontWeight={800}
                                                >
                                                    {category}
                                                </Typography>
                                            }
                                        />
                                        {openCategories[category] ? <ExpandLess sx={{color: 'white'}} /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={openCategories[category]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{pl: '6px', py: '5px'}}>
                                            {serviceList
                                                .filter((service) => service.category.includes(category))
                                                .map((service) => (
                                                    <ListItemButton
                                                        key={service.id}
                                                        component={Link}
                                                        to={`/service/${service.id}`}
                                                        sx={{
                                                            background: location.pathname === `/service/${service.id}` ? 'linear-gradient(to right, rgba(0, 71, 187, 0.8), rgba(151, 169, 77, 0.8))' : '',
                                                            border: location.pathname === `/service/${service.id}` ? '1px solid rgba(151,169,77,1)' : '',
                                                            borderRadius: '10px',
                                                            // margin: 1,
                                                            width: '98%',
                                                        }}
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'inherit',
                                                        }}
                                                    >
                                                        <ListItemIcon>
                                                            <KeyboardArrowRightIcon
                                                                sx={{ color: location.pathname === `/service/${service.id}` ? 'white' : 'normal' }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    fontWeight={600}
                                                                    fontSize={17}
                                                                    align={'left'}
                                                                    color={location.pathname === `/service/${service.id}` ? 'white' : 'normal'}
                                                                >
                                                                    {service.title}
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItemButton>
                                                ))}
                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </List>
                    </List>
                    <Divider/>
                </Drawer>
                <Main open={open} sx={{background: '#fefefe'}}>
                    <DrawerHeader/>
                    {children}
                </Main>
            </Box>

            <Footer open={open} sx={{position: 'sticky', mt: 'auto'}}>
                <FooterContent/>
            </Footer>
        </>
    );
}
