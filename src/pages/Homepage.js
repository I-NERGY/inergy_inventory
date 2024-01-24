import React from 'react';
import {Link} from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box, Divider,
    useTheme,
} from '@mui/material';

import {serviceList} from '../serviceList';

function Homepage() {
    const theme = useTheme();

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    };

    const cardContentStyle = {
        flexGrow: 1,
    };

    const containerStyle = {
        textAlign: 'center',
        marginBottom: '40px',
        marginTop: '20px',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginBottom: '10px',
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        color: theme.palette.secondary.main,
        marginBottom: '20px',
        marginTop: '10px',
    };

    const dividerStyle = {
        background: theme.palette.secondary.main,
        height: '2px',
        margin: '0 auto',
        width: '50px',
    };

    const bannerStyle = {
        position: 'relative',
        width: '100%',
        height: '400px',
        color: 'white',
        backgroundImage: 'url("https://i-nergy.eu/sites/default/files/styles/mt_large/public/2023-12/i-nergy_3_0_0.jpg?itok=JZDBUS_x")',
        backgroundSize: 'cover',
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
                        I-NERGY Service Toolbox
                    </Typography>
                    <Typography variant="h4">
                        Discover our project's services
                    </Typography>
                </Box>
            </Box>


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
                                <Typography gutterBottom variant="h5" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {service.short_description}
                                </Typography>
                            </CardContent>
                            <Button
                                component={Link}
                                to={`/service/${service.id}`}
                                size="medium"
                                variant="outlined"
                                color="primary"
                                sx={{alignSelf: 'center', my: 2}} // Center the button within the card
                            >
                                Service page
                            </Button>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Homepage;
