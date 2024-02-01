import {useTheme} from "@mui/material/styles";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from "@mui/material/Box";

const FooterContent = () => {
    const theme = useTheme();

    return (
        <Container maxWidth={'xl'}>
            <Grid container spacing={5} py={3}
                  justifyItems={'center'}>
                <Grid item xs={12} md={4}>
                    <Stack direction={'row'} justifyContent="center"
                           alignItems="center">
                        <img src="/images/aiod.svg" alt="AIoD logo" height={'70px'}
                             style={{objectFit: 'cover', marginRight: '50px'}}/>
                        <img src="/images/i-nergy_logo_trans_back.png" alt="I-NERGY logo" height={'70px'}
                             style={{objectFit: 'cover'}}/>
                    </Stack>
                    <Stack direction={'row'} mt={3} px={5}>
                        <img src="/images/ec_logo.svg" alt="EU logo" height={'100px'}
                             style={{objectFit: 'cover', marginRight: '10px'}}/>
                        <Typography variant={'caption'}
                                    color={'white'}>
                            Funded by the European Union. Views and opinions expressed are however those of the
                            author(s) only and do not necessarily reflect those of the European Union. Neither the
                            European Union nor the granting authority can be held responsible for them.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        justifyItems: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography sx={{color: theme.palette.aiod_yellow.main}} variant={'h6'}>
                        CONTACT I-NERGY
                    </Typography>
                    <Typography>
                        <span style={{color: 'rgba(227,229,232,.52)', fontWeight: '500'}}>Email </span>
                        <a style={{color: 'white'}} href="mailto:contact@i-nergy.eu">
                            contact@i-nergy.eu
                        </a>
                    </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
                        <IconButton
                            href="https://twitter.com/inergy_h2020"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/company/i-nergy-h2020/about/"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton
                            href="https://www.youtube.com/channel/UCVFa8GICBypZIcAnLB9gdzg"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <YouTubeIcon/>
                        </IconButton>
                    </Box>

                    <Typography sx={{color: theme.palette.aiod_yellow.main, mb: 1}} variant={'h6'}>
                        STAY UPDATED
                    </Typography>

                    <Button
                        component="a"
                        href="https://i-nergy.eu/contact"
                        target="_blank"
                        variant="outlined"
                        sx={{
                            color: '#0047BB',
                            borderRadius: '25px',
                            border: `1px solid ${theme.palette.secondary_blue.main}`,
                            backgroundColor: theme.palette.secondary_blue.main,
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#0047BB',
                            },
                        }}
                        endIcon={<MailOutlineIcon/>}
                    >
                        <Typography sx={{fontWeight: '700', textTransform: 'none'}}>Contact Us</Typography>
                    </Button>

                    <br/>

                    <Button
                        component="a"
                        href="https://i-nergy.eu/news"
                        target="_blank"
                        variant={'outlined'}
                        sx={{
                            borderRadius: '25px',
                            mt: 1,
                            border: `1px solid ${theme.palette.aiod_yellow.main}`,
                            '&:hover': {
                                backgroundColor: theme.palette.aiod_yellow.main,
                                color: '#0047BB',
                                '& .MuiSvgIcon-root': {
                                    transform: 'rotate(-45deg)',
                                    color: '#0047BB', // Change the endIcon color on hover
                                },
                                '& .MuiTypography-root': {
                                    color: '#0047BB', // Change the text color on hover
                                },
                            },
                            '& .MuiSvgIcon-root': {
                                transform: 'rotate(-45deg)',
                                transition: 'color 0.3s ease-in-out', // Add transition for smooth color change
                            },
                        }}
                        endIcon={
                            <SendIcon
                                sx={{
                                    mb: '2px',
                                    color: theme.palette.aiod_yellow.main,
                                    '&:hover': {
                                        color: '#0047BB',
                                    },
                                }}
                            />
                        }
                    >
                        <Typography
                            sx={{
                                fontWeight: '700',
                                textTransform: 'none',
                                color: theme.palette.aiod_yellow.main,
                                '&:hover': {
                                    color: '#0047BB',
                                },
                            }}
                        >
                            I-NERGY News
                        </Typography>
                    </Button>

                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        justifyItems: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                    <Typography sx={{color: theme.palette.aiod_yellow.main}} variant={'h6'}>
                        CONTACT AIoD
                    </Typography>
                    <Typography>
                        <span style={{color: 'rgba(227,229,232,.52)', fontWeight: '500'}}>Email </span>
                        <a style={{color: 'white'}} href="mailto: info@aiod.eu">
                            info@aiod.eu
                        </a>
                    </Typography>


                    <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
                        <IconButton
                            href="https://twitter.com/AIonDemand"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/company/aiondemand/"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton
                            href="https://www.youtube.com/@AIonDemand"
                            target="_blank"
                            rel="noopener"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: theme.palette.aiod_yellow.main,
                                },
                            }}
                        >
                            <YouTubeIcon/>
                        </IconButton>
                    </Box>


                    <Button
                        component="a"
                        href="https://aiod.eu/about"
                        target="_blank"
                        variant={'outlined'}
                        sx={{
                            borderRadius: '25px',
                            mt: 1,
                            border: `1px solid ${theme.palette.aiod_yellow.main}`,
                            '&:hover': {
                                backgroundColor: theme.palette.aiod_yellow.main,
                                color: '#0047BB',
                                '& .MuiSvgIcon-root': {
                                    color: '#0047BB',
                                },
                                '& .MuiTypography-root': {
                                    color: '#0047BB',
                                },
                            },
                            '& .MuiSvgIcon-root': {
                                transform: 'rotate(-45deg)',
                                transition: 'color 0.3s ease-in-out',
                            },
                        }}
                        endIcon={
                            <SendIcon
                                sx={{
                                    mb: '2px',
                                    color: theme.palette.aiod_yellow.main,
                                    '&:hover': {
                                        color: '#0047BB',
                                    },
                                }}
                            />
                        }
                    >
                        <Typography
                            sx={{
                                fontWeight: '700',
                                textTransform: 'none',
                                color: theme.palette.aiod_yellow.main,
                                '&:hover': {
                                    color: '#0047BB',
                                },
                            }}
                        >
                            About the project
                        </Typography>
                    </Button>

                </Grid>
            </Grid>
        </Container>
    );
}

export default FooterContent;