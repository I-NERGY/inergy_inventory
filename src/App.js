import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";

// Set primary color here
let primary_inergy = '#97A94D'

// Set secondary color here
let secondary_inergy = '#B2C561'

let primary_blue_aiod = '#0047BB'
let secondary_blue_aiod = '#41B6E6'
let primary_yellow_aiod = '#FFED00'

// Dashboard theme setup here
const theme = createTheme({
    palette: {
        primary: {
            main: primary_inergy
        },
        secondary: {
            main: secondary_inergy
        },
        aiod_yellow: {
            main: primary_yellow_aiod
        },
        primary_blue: {
            main: primary_blue_aiod
        },
        secondary_blue: {
            main: secondary_blue_aiod
        },
        background: {
            default: `linear-gradient(to right, ${primary_inergy}, ${secondary_inergy})`
        },
        background_combined: {
            default: `linear-gradient(to right, ${primary_inergy}, ${primary_blue_aiod})`
        },
        background_aiod: {
            default: `linear-gradient(to right, ${primary_blue_aiod} 75%, ${secondary_blue_aiod}) 100%`
        },
        background_breadcrumb: {
            default: `linear-gradient(to right, rgba(151, 169, 77, 0.5), rgba(0, 71, 187, 0.5))`
        },
        background_screenshots: {
            default: `linear-gradient(to right, rgba(151, 169, 77, 0.1), rgba(0, 71, 187, 0.1))`
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
            'Roboto',
            'Jura'
        ].join(','),
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/service/:serviceId" element={<ServicePage/>}/>
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
