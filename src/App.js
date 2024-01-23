import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";

// Set primary color here
let primary = '#97A94D'

// Set secondary color here
let secondary = '#B2C561'

// Dashboard theme setup here
const theme = createTheme({
    palette: {
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        },
        background: {
            default: `linear-gradient(to right, ${primary}, ${secondary})`
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'Roboto',
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
