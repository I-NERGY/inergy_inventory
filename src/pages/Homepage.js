import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";

import {
    Grid, Card, CardContent,
    CardMedia, Container, Typography,
    Button, Accordion, AccordionSummary,
    Box, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {serviceList} from '../serviceList';

function Homepage() {
    const theme = useTheme();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categoryOrder = [
        'ΑΙ for Energy Networks (I-NET)',
        'AI for Distributed Energy Resources (I-DER)',
        'AI - Other Energy Efficiency & Non-Energy Domains (I-ENEF)',
        'General Analytic Tools',
        'Tools for ML Pipeline'
    ];

    const initializedCategories = categoryOrder.reduce((acc, category) => {
        acc[category] = [];
        return acc;
    }, {});

    // Fill the initializedCategories with services
    const servicesByCategory = serviceList.reduce((acc, service) => {
        let foundCategory = false;
        categoryOrder.forEach((category) => {
            if (service.category.includes(category)) {
                acc[category].push(service);
                foundCategory = true;
            }
        });
        // If a service doesn't match any predefined category, it can optionally be added to 'General'
        if (!foundCategory && acc['General']) {
            acc['General'].push(service);
        }
        return acc;
    }, initializedCategories);

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

            <Container maxWidth={!isLargeScreen ? 'lg' : 'xl'} sx={{my: 5}}>
                {categoryOrder.map((category) => (
                    <Accordion
                        key={category}
                        sx={{
                            mb: 2,
                            px: 2,
                            '&:before': {display: 'none'},
                            boxShadow: 3,
                            // background: 'linear-gradient(to right, rgba(0, 71, 187, 0.1), rgba(255, 237, 0, 0.1))'
                            background: 'linear-gradient(to right, rgba(151, 169, 77, 0.3), rgba(0, 71, 187, 0.3))'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            sx={{height: '100px', minHeight: '100px', alignItems: 'center'}}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h4" className="headingGradient"
                                        fontWeight={'bold'}>{category}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3} sx={{p: 2}}>
                                {servicesByCategory[category].map((service) => (
                                    <Grid item key={service.id} xs={12} md={4}>
                                        <Card style={cardStyle}>
                                            <CardMedia
                                                component="img"
                                                alt={service.title}
                                                height="200"
                                                image={service.image.source}
                                            />
                                            <CardContent style={cardContentStyle}>
                                                <Typography gutterBottom variant="h5" component="div"
                                                            fontWeight={'bold'}>
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
                                                sx={{alignSelf: 'center', my: 2, color: 'white'}}
                                            >
                                                Service page
                                            </Button>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </>
    );
}

export default Homepage;
