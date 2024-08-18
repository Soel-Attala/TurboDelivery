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
    marginLeft: open ? 240 : 240, // Ajusta según si el Sidebar está abierto o cerrado
    transition: 'margin-left 0.3s', // Transición suave
    height: 'calc(100vh - 56px)', // Ajusta la altura para ocupar la pantalla completa sin scroll vertical
    overflow: 'hidden', // Oculta el overflow para evitar barras de desplazamiento
}));

const Layout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Asegura que el contenedor ocupe toda la altura
});

const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
    height: '100%', // Asegura que el contenedor ocupe toda la altura disponible
    textAlign: 'center', // Alinea el texto en el centro
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
