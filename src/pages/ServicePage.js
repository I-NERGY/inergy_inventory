import React, {useState, useEffect} from 'react';
import {useTheme} from "@mui/material/styles";

import {useParams, Link} from "react-router-dom";
import {serviceList} from "../serviceList";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Breadcrumb from "../components/layout/Breadcrumb";

const ServicePage = () => {
    const theme = useTheme();
    let {serviceId} = useParams()
    const service = serviceList.find(service => service.id === serviceId)

    const breadcrumbs = [
        <Link className={'breadcrumbLink'} key="1" to="/">{'Homepage'}</Link>,
        <Typography key="3" color={theme.palette.primary_blue.main} fontWeight={'bold'} fontSize={'20px'}>
            {service?.title}
        </Typography>];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleOpen = (index) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + service.screenshots?.length) % service.screenshots?.length);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % service.screenshots?.length);
    };

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} welcome_msg={''}/>

            <Container maxWidth={'xl'} sx={{py: 3}}>

                <Box display={'flex'} sx={{justifyContent: 'space-between', px: {xs: 0, md: 2}}} mt={5}>
                    <Typography fontWeight={900} variant={'h5'}>{service.title}</Typography>
                    <Divider orientation="vertical" flexItem sx={{display: {xs: 'block', md: 'none'}, mx: 2}}/>
                    <Typography fontWeight={900} variant={'h5'}>{service?.category}</Typography>
                </Box>

                <Divider sx={{mt: 1}}/>

                <Paper elevation={5} sx={{mt: 2}}>
                    <Grid container>
                        <Grid item xs={12} md={8} order={{xs: 2, md: 1}}>
                            <Container maxWidth={'xl'}
                                       sx={{p: 3, display: 'flex', flexDirection: 'column', height: '100%'}}>
                                <Typography fontWeight={500}>{service.full_description}</Typography>

                                <Typography variant={'subtitle2'}
                                            sx={{mt: 'auto', pt: 5}}><span
                                    style={{fontWeight: 'bold'}}>Developer</span>: {service.developer}</Typography>
                                <Typography variant={'subtitle2'}><span
                                    style={{fontWeight: 'bold'}}>Category</span>: {service.category}</Typography>
                            </Container>
                        </Grid>

                        <Grid item xs={12} md={4} order={{xs: 1, md: 2}} sx={{position: 'relative'}}
                              className={'serviceImage'}>

                            <img
                                style={{height: '100%', maxHeight: '400px', width: '100%', objectFit: 'cover',}}
                                src={service.image.source} className={'serviceImage'}
                                alt=""/>
                        </Grid>
                    </Grid>

                    <Divider/>

                    {(service.service_links.length > 0 ||
                        service.github_links.length > 0 ||
                        service.aiod_links.length > 0) && (
                        <Grid container>
                            <Grid item xs={12} md={service.demoVideo ? 6 : 12}>
                                <Container maxWidth={'xl'}
                                           sx={{height: '100%', overflow: 'auto', backgroundColor: '#f9f9f9'}}>
                                    <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                                        <Typography fontWeight={'bold'} variant={'h6'} sx={{textDecoration: 'underline'}}>
                                            Useful Links
                                        </Typography>
                                    </Stack>
                                    {service.service_links.length > 0 && (
                                        <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                                            <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>
                                                Service
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
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
                                                            background: '#97A94D',
                                                            color: '#fff',
                                                            borderColor: '#97A94D',
                                                            transition: 'background 0.2s, color 0.2s',
                                                            '&:hover': {
                                                                background: '#B2C561',
                                                                color: '#fff',
                                                                borderColor: '#B2C561',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{fontWeight: 'bold'}}>{link.name}</Typography>
                                                    </Button>
                                                ))}
                                            </Box>
                                        </Stack>
                                    )}

                                    {service.github_links.length > 0 && (
                                        <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                                            <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>
                                                GitHub
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
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
                                                            background: '#333333',
                                                            color: '#CCCCCC',
                                                            borderColor: '#333333',
                                                            transition: 'background 0.2s, color 0.2s',
                                                            '&:hover': {
                                                                background: '#CCCCCC',
                                                                color: '#333333',
                                                                borderColor: '#CCCCCC',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{fontWeight: 'bold'}}>{link.name}</Typography>
                                                    </Button>
                                                ))}
                                            </Box>
                                        </Stack>
                                    )}

                                    {service.aiod_links.length > 0 && (
                                        <Stack direction={'row'} sx={{py: 1}} spacing={2}>
                                            <Typography variant={'h6'} sx={{my: 'auto', ml: 'auto'}}>
                                                AIoD
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <ChevronRightIcon fontSize={'large'}/>
                                                {service.aiod_links.map(link => (
                                                    <Button
                                                        key={link.link}
                                                        component={Link}
                                                        to={link.link}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{
                                                            mx: 1,
                                                            background: '#0047BB',
                                                            color: '#E7DC56',
                                                            borderColor: '#0047BB',
                                                            transition: 'background 0.2s, color 0.2s',
                                                            '&:hover': {
                                                                background: '#E7DC56',
                                                                color: '#0047BB',
                                                                borderColor: '#E7DC56',
                                                            },
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{fontWeight: 'bold'}}>{link.name}</Typography>
                                                    </Button>
                                                ))}
                                            </Box>
                                        </Stack>
                                    )}
                                </Container>
                            </Grid>
                            {service.demoVideo && <Grid item xs={12} md={6} sx={{background: '#f9f9f9'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%'
                                }}>
                                    <Link to={service.demoVideo} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            startIcon={<YouTubeIcon/>}
                                            sx={{
                                                fontWeight: 'bold',
                                                background: '#CC0000',
                                                color: '#FFFFFF',
                                                transition: 'background 0.3s, color 0.3s',
                                                '&:hover': {
                                                    background: '#FFFFFF',
                                                    color: '#CC0000',
                                                },
                                            }}
                                        >
                                            YouTube Demo
                                        </Button>
                                    </Link>
                                </div>
                            </Grid>}
                        </Grid>
                    )}

                </Paper>

                {service.screenshots?.length > 0 && <Grid sx={{py: 3, background: theme.palette.background_screenshots.default, mt: 2, borderRadius: "5px"}}>
                    <Box display={'flex'} sx={{justifyContent: 'space-between', px: {xs: 0, md: 2}}} >
                        <Typography fontWeight={900} variant={'h5'}>Screenshots</Typography>
                    </Box>

                    <Divider sx={{mt: 1}}/>

                    <div>
                        <Grid container spacing={2} mt={1} px={2}>
                            {service.screenshots?.map((image, index) => (
                                <Grid item key={index} xs={6} md={3} style={{height: '300px'}}>
                                    <div
                                        style={{
                                            position: 'relative',
                                            height: '100%',
                                        }}
                                    >
                                        <img
                                            src={image.source}
                                            alt={image.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                cursor: 'pointer',
                                                transition: 'opacity 0.3s',
                                                ':hover': {
                                                    opacity: 0.7,
                                                },
                                            }}
                                            onClick={() => handleOpen(index)}
                                        />
                                    </div>
                                </Grid>
                            ))}
                        </Grid>

                        <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
                            <DialogTitle>{service.screenshots[selectedImageIndex].name}</DialogTitle>
                            <DialogContent>
                                <div
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={service.screenshots[selectedImageIndex].source}
                                        alt={`Selected ${selectedImageIndex + 1}`}
                                        style={{maxWidth: '100%', maxHeight: '100%', margin: '0 auto'}}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            left: '32px',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                        }}
                                        onClick={handlePrevImage}
                                    >
                                        <ArrowBackIcon
                                            fontSize="large"
                                            color="primary"
                                            style={{
                                                fontSize: '3rem',
                                                padding: '12px',
                                                background: 'rgba(255, 255, 255, 0.7)',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            right: '32px',
                                            cursor: 'pointer',
                                            zIndex: 1,
                                        }}
                                        onClick={handleNextImage}
                                    >
                                        <ArrowForwardIcon
                                            fontSize="large"
                                            color="primary"
                                            style={{
                                                fontSize: '3rem',
                                                padding: '12px',
                                                background: 'rgba(255, 255, 255, 0.7)',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Grid>}

            </Container>
        </>
    );
}

export default ServicePage;