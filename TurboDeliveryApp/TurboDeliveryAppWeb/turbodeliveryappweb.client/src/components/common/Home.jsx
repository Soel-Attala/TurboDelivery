import { Typography } from '@mui/material';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import { styled } from '@mui/system';
import { useState } from 'react';

const MainContent = styled('main')(({ open }) => ({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '200px',
    marginLeft: open ? 240 : 240, 
    transition: 'margin-left 0.3s', 
    height: 'calc(100vh - 56px)', 
    overflow: 'hidden', 
}));

const Layout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', 
});

const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100%', 
    textAlign: 'center',
});

function Home() {
    const [open, setOpen] = useState(true);

    return (
        <Layout>
            <Sidebar open={open} onClose={setOpen} />
            <MainContent open={open}>
                <ContentContainer>
                    <Typography variant="h3" gutterBottom color="#000000">
                        Welcome to Turbo Delivery!
                    </Typography>
                    <Typography variant="h6" gutterBottom color="#000000">
                        Manage your orders and deliveries efficiently with our platform.
                    </Typography>
                </ContentContainer>
            </MainContent>
            <Footer />
        </Layout>
    );
}

export default Home;
