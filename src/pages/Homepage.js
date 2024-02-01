import React from 'react';
import {Link} from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
} from '@mui/material';

import {serviceList} from '../serviceList';
import Container from "@mui/material/Container";

function Homepage() {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    };

    const cardContentStyle = {
        flexGrow: 1,
    };

    const bannerStyle = {
        position: 'relative',
        width: '100%',
        height: '500px',
        color: 'white',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/aiod_inergy.jpg)`, // Use process.env.PUBLIC_URL to get the correct path
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
    };

    const textStyle = {
        position: 'relative',
        zIndex: 2,
        color: 'white',
        textShadow: '1px 1px 20px rgba(0, 0, 0, 0.7)',
        padding: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        display: 'inline-block',
    };

    return (
        <>
            <Box style={bannerStyle}>
                <div style={overlayStyle}></div>
                <Box style={textStyle}>
                    <Typography variant="h2" component="h1" gutterBottom fontWeight={500}>
                        I-NERGY Services Inventory
                    </Typography>
                    <Typography variant="h4">
                        Discover our project's services
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth={'xl'} sx={{mt: 5}}>
                <Grid container spacing={3} sx={{p: 2}}>
                    {serviceList?.map((service) => (
                        <Grid item key={service.id} xs={12} md={4}>
                            <Card style={cardStyle}>
                                <CardMedia
                                    component="img"
                                    alt={service.title}
                                    height="200"
                                    image={service.image.source}
                                />
                                <CardContent style={cardContentStyle}>
                                    <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" fontWeight={500}>
                                        {service.short_description}
                                    </Typography>
                                </CardContent>
                                <Button
                                    component={Link}
                                    to={`/service/${service.id}`}
                                    size="medium"
                                    variant={'contained'}
                                    color="primary"
                                    sx={{alignSelf: 'center', my: 2, color: 'white'}} // Center the button within the card
                                >
                                    Service page
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Homepage;
