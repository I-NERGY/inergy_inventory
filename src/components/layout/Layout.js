import React from 'react';
import {useTheme} from '@mui/material/styles';
import {Link, useLocation} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";

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
import AppsIcon from '@mui/icons-material/Apps';

import {Main, AppBar, DrawerHeader, Footer} from './LayoutComponents';
import FooterContent from './FooterContent';
import MenuButton from "./MenuButton";

import {appbarMenuButtonItems} from "../../appbarMenuButtonItems";
import {serviceList} from "../../serviceList";

const drawerWidth = 240;

export default function Layout({children}) {
    const {keycloak} = useKeycloak();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const location = useLocation()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        keycloak.logout()
    }

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
                            <img src="/images/aiod.svg" alt="AIoD logo" height={'60px'}
                                 style={{objectFit: 'cover', marginRight: '10px'}}/>
                            <img src="/images/i-nergy_logo_trans_back.png" alt="I-NERGY logo" height={'60px'}
                                 style={{objectFit: 'cover'}}/>

                        </Stack>
                        {/*<Typography variant="h6" noWrap component="div" color={'white'}>*/}
                        {/*    I-NERGY Services Inventory*/}
                        {/*</Typography>*/}
                        {keycloak.authenticated === true && <>
                            <Typography
                                sx={{ml: 'auto'}}
                                style={{
                                    color: 'white'
                                }}>Welcome, {keycloak?.tokenParsed?.preferred_username}</Typography>
                            <MenuButton subLinks={appbarMenuButtonItems} signout={handleSignOut}/>
                        </>}
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
                        {/*<img src="/images/i-nergy_logo_trans_back.png" alt="" height={'60px'}*/}
                        {/*     style={{objectFit: 'cover'}}/>*/}
                        {/*<img src="/images/aiod.svg" alt="" height={'60px'}*/}
                        {/*     style={{objectFit: 'cover'}}/>*/}
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {/* Map over serviceList to generate menu items */}
                        {serviceList.map((service) => (
                            <ListItem
                                sx={{
                                    background: location.pathname === `/service/${service.id}` ? 'linear-gradient(270deg, rgba(151,169,77,1) 55%, rgba(255,255,255,1) 100%)' : '',
                                    border: location.pathname === `/service/${service.id}` ? '1px solid rgba(151,169,77,1)' : '',
                                    borderRadius: '10px', margin: 1, width: '95%'
                                }}
                                key={service.id}
                                disablePadding
                                component={Link}
                                to={`/service/${service.id}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AppsIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography fontWeight={500} fontSize={17} align={'left'}
                                                    color={location.pathname === `/service/${service.id}` ? 'white' : 'normal'}>
                                            {service.title}
                                        </Typography>}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                </Drawer>
                <Main open={open}>
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
