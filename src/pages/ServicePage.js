import {useParams, Link} from "react-router-dom";
import {serviceList} from "../serviceList";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Breadcrumb from "../components/layout/Breadcrumb";
import {Button, useTheme} from "@mui/material";
import React from "react";

const ServicePage = () => {
    const theme = useTheme();
    let {serviceId} = useParams()
    const service = serviceList.find(service => service.id === serviceId)

    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">{'Homepage'}</Link>,
        <Typography key="3" color="secondary" fontWeight={'bold'} fontSize={'20px'}>
            {service?.title}
        </Typography>];

    const gradientBackgroundAIoD = `linear-gradient(to right, #0047BB, #E7DC56)`;
    const gradientTextAIoD = `linear-gradient(to right, #E7DC56, #0047BB)`;
    const gradientTextStyleAIoD = {
        background: gradientTextAIoD,
        '-webkit-background-clip': 'text',
        color: 'transparent', // Hide the original text
        display: 'inline-block',
        // fontWeight: 'bold'
    };


    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={'xl'} sx={{py: 3}}>

                <Box display={'flex'} sx={{justifyContent: 'space-between', px: {xs: 0, md: 2}}} mt={5}>
                    <Typography fontWeight={'bold'} variant={'h5'}>{service.title}</Typography>
                    <Divider orientation="vertical" flexItem sx={{display: {xs: 'block', md: 'none'}, mx: 2}}/>
                    <Typography fontWeight={'bold'} variant={'h5'}>{service?.category}</Typography>
                </Box>

                <Divider sx={{mt: 1}}/>

                <Paper elevation={5} sx={{mt: 2}}>
                    <Grid container>
                        <Grid item xs={12} md={8} order={{xs: 2, md: 1}}>
                            <Container maxWidth={'xl'}
                                       sx={{p: 3, display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <Typography>{service.full_description}</Typography>

                                <Typography variant={'subtitle2'}
                                            sx={{mt: 'auto', pt: 5}}><span
                                    style={{fontWeight: 'bold'}}>Developer</span>: {service.developer}</Typography>
                            </Container>
                        </Grid>

                        <Grid item xs={12} md={4} order={{xs: 1, md: 2}} sx={{position: 'relative'}}
                              className={'serviceImage'}>

                            <img
                                style={{height: '100%', maxHeight: '400px', width: '100%', objectFit: 'cover',}}
                                src={service.image} className={'serviceImage'}
                                alt=""/>
                        </Grid>
                    </Grid>
                    <Divider/>
                    {(service.service_links.length > 0 ||
                        service.github_links.length > 0 ||
                        service.aiod_links.length > 0) && <Container maxWidth={'xl'} sx={{
                        // display: 'flex',
                        height: '100%', overflow: 'auto', backgroundColor: '#f9f9f9'
                    }}>
                        <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                            <Typography fontWeight={'bold'} variant={'h6'}>Useful Links</Typography>
                        </Stack>
                        {service.service_links.length > 0 &&
                            <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                                <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>Service</Typography>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center',
                                }}>
                                    <ChevronRightIcon fontSize={'large'}/>
                                    {service.service_links.map(link => (
                                        <Button
                                            key={link.link}
                                            component={Link}
                                            to={link.link}
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                mx: 1,
                                                background: '#97A94D', // Custom background color
                                                color: '#fff', // Custom text color
                                                borderColor: '#97A94D', // Custom border color
                                                transition: 'background 0.3s, color 0.3s', // Add transitions for smooth color change
                                                '&:hover': {
                                                    background: '#B2C561', // Change background color on hover
                                                    color: '#fff', // Change text color on hover
                                                    borderColor: '#B2C561', // Change border color on hover
                                                },
                                            }}
                                        >
                                            <Typography variant="body2">
                                                {link.name}
                                            </Typography>
                                        </Button>
                                    ))}
                                </Box>
                            </Stack>}

                        {service.github_links.length > 0 && <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                            <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>GitHub</Typography>
                            <Box sx={{
                                display: 'flex', justifyContent: 'center',
                            }}>
                                <ChevronRightIcon fontSize={'large'}/>
                                {service.github_links.map(link => (
                                    <Button
                                        key={link.link}
                                        component={Link}
                                        to={link.link}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            mx: 1,
                                            background: '#333333', // GitHub Black as background color
                                            color: '#CCCCCC', // Light color as text color
                                            borderColor: '#333333', // GitHub Black for border
                                            transition: 'background 0.3s, color 0.3s', // Add transitions for smooth color change
                                            '&:hover': {
                                                background: '#CCCCCC', // Change background color on hover to light color
                                                color: '#333333', // Change text color on hover to GitHub Black
                                                borderColor: '#CCCCCC', // Change border color to light color on hover
                                            },
                                        }}
                                    >
                                        <Typography variant="body2">
                                            {link.name}
                                        </Typography>
                                    </Button>
                                ))}
                            </Box>
                        </Stack>}

                        {service.aiod_links.length > 0 && <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                            <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>AIoD</Typography>
                            <Box sx={{
                                display: 'flex', justifyContent: 'center',
                            }}>
                                <ChevronRightIcon fontSize={'large'}/>
                                {service.aiod_links.map(link => (
                                    <Button
                                        key={link.link}
                                        component={Link}
                                        to={link.link}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            background: '#0047BB',
                                            color: '#E7DC56',
                                            borderColor: '#0047BB',
                                            transition: 'background 0.3s, color 0.3s', // Add transitions for smooth color change
                                            '&:hover': {
                                                background: '#E7DC56', // Change background color on hover
                                                color: '#0047BB', // Change text color on hover
                                                borderColor: '#E7DC56'
                                            },
                                        }}
                                    >
                                        <Typography variant="body2">
                                            {link.name}
                                        </Typography>
                                    </Button>
                                ))}
                                {/*{service.aiod_links.map(link => (*/}
                                {/*    <Button*/}
                                {/*        key={link.link}*/}
                                {/*        component={Link}*/}
                                {/*        to={link.link}*/}
                                {/*        size="medium"*/}
                                {/*        variant="outlined"*/}
                                {/*        sx={{*/}
                                {/*            background: gradientBackgroundAIoD*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <Typography variant="body1" style={gradientTextStyleAIoD}>*/}
                                {/*            {link.name}*/}
                                {/*        </Typography>*/}
                                {/*    </Button>*/}
                                {/*))}*/}
                            </Box>
                        </Stack>}

                    </Container>}
                </Paper>

            </Container>
        </>
    );
}

export default ServicePage;