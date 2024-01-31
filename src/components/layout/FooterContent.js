import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import React from "react";

const FooterContent = () => {
    return (
        <Container maxWidth={'xl'}>
            <Grid container spacing={5} py={3}
                  alignItems="center" justifyItems={'center'}>
                <Grid item xs={12} md={4} sx={{px: {md: 5, xs: 0}}}>
                    <Stack direction={'row'} justifyContent="center"
                           alignItems="center">
                        <img src="/images/aiod.svg" alt="AIoD logo" height={'60px'}
                             style={{objectFit: 'cover', marginRight: '50px'}}/>
                        <img src="/images/i-nergy_logo_trans_back.png" alt="I-NERGY logo" height={'60px'}
                             style={{objectFit: 'cover'}}/>
                    </Stack>
                    <Stack direction={'row'} mt={3} px={5}>
                        <img src="/images/ec_logo.svg" alt="EU logo" height={'60px'}
                             style={{objectFit: 'cover', marginRight: '10px'}}/>
                        <Typography variant={'caption'}
                                    color={'white'}>
                            Funded by the European Union. Views and opinions expressed are however those of the
                            author(s) only and do not necessarily reflect those of the European Union. Neither the
                            European Union nor the granting authority can be held responsible for them.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={1} alignItems="center" justifyContent={'center'} justifyItems={'center'}>
                </Grid>

                <Grid item xs={12} md={7}>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FooterContent;