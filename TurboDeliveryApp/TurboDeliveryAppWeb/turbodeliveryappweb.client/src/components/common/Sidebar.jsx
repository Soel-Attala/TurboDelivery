import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PropTypes from 'prop-types'; // Importa PropTypes

const drawerWidth = 240;

const Root = styled('div')({
    display: 'flex',
    height: '100vh', // Asegura que el contenedor ocupe toda la altura de la ventana
});

const DrawerContainer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#fff', // Cambia el color de fondo a blanco
        color: '#000', // Cambia el color del texto a negro
        height: '100%', // Asegura que el Drawer ocupe toda la altura
    },
}));

const Title = styled(Typography)({
    textAlign: 'center',
    margin: '16px 0',
    color: '#000', // Cambia el color del texto a negro
});

const HideButton = styled(IconButton)(({ open }) => ({
    position: 'absolute',
    top: '50%',
    right: open ? 0 : -40, // Ajusta la posición según el estado abierto o cerrado
    transform: 'translateY(-50%)', // Centra verticalmente
    zIndex: 1200, // Asegúrate de que esté por encima del Drawer
    backgroundColor: '#fff', // Fondo blanco
    border: '1px solid #000', // Borde negro
    borderRadius: '50%', // Círculo
}));

function Sidebar({ open, onClose }) {
    return (
        <Root>
            <DrawerContainer
                variant="persistent"
                anchor="left"
                open={open}
                onClose={() => onClose(false)}
            >
                <HideButton open={open} onClick={() => onClose(!open)}>
                    {open ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                </HideButton>
                <Title variant="h6">
                    Turbo Delivery
                </Title>
                <Divider />
                <List>
                    <ListItem button component={NavLink} to="/profile">
                        <ListItemText primary="Mi Perfil" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/dashboard">
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button component={NavLink} to="/order-form">
                        <ListItemText primary="Cargar Orden" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/customer-panel">
                        <ListItemText primary="Solicitar Delivery" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/map">
                        <ListItemText primary="Mapa" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/customers">
                        <ListItemText primary="Clientes" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/login">
                        <ListItemText primary="Cerrar Sesión" />
                    </ListItem>


                </List>
            </DrawerContainer>
            {!open && (
                <IconButton onClick={() => onClose(true)} style={{ position: 'fixed', top: '50%', left: 10 }}>
                    <ArrowRightIcon />
                </IconButton>
            )}
        </Root>
    );
}

// Define la validación de las props
Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
