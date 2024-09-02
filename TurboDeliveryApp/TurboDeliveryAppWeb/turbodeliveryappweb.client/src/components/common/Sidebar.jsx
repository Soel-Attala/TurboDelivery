import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const Root = styled('div')({
    display: 'flex',
    height: '100vh',
});

const DrawerContainer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: '#000',
        height: '100%',
    },
}));

const Title = styled(Typography)({
    textAlign: 'center',
    margin: '16px 0',
    color: '#000',
});

const HideButton = styled(IconButton)(({ open }) => ({
    position: 'absolute',
    top: '50%',
    right: open ? 0 : -40,
    transform: 'translateY(-50%)',
    zIndex: 1200,
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '50%',
}));

function Sidebar({ open, onClose }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Elimina el token de autenticación u otra información sensible
        localStorage.removeItem('authToken');

        // Redirige al usuario a la página de login
        navigate('/login', { replace: true });

        // Previene que el usuario pueda volver con la flecha atrás del navegador
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function () {
            navigate('/login');
        };
    };

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
                    <ListItem button component={NavLink} to="/request-delivery">
                        <ListItemText primary="Solicitar Delivery" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/schedule-delivery">
                        <ListItemText primary="Programar Delivery Fijo" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/map">
                        <ListItemText primary="Mapa" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/customers">
                        <ListItemText primary="Clientes" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
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

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
