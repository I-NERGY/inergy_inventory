import React from 'react';
import { Link } from 'react-router-dom';
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

import { serviceList } from '../serviceList';

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

    return (
        <>
            <Box style={containerStyle}>
                <Typography style={titleStyle} variant="h1">
                    I-NERGY Service Toolbox
                </Typography>
                <Divider style={dividerStyle} />
                <Typography style={subtitleStyle} variant="subtitle2">
                    Discover our project's services
                </Typography>
            </Box>


            <Grid container spacing={3}>
                {serviceList?.map((service) => (
                    <Grid item key={service.id} xs={12} md={4}>
                        <Card style={cardStyle}>
                            <CardMedia
                                component="img"
                                alt={service.title}
                                height="200"
                                image={service.image}
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
                                sx={{ alignSelf: 'center', my: 2 }} // Center the button within the card
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
