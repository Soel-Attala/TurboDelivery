
import PropTypes from 'prop-types';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { styled } from '@mui/system';

const drawerWidth = 240;

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderTop: '1px solid #000',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    position: 'fixed',
    bottom: 0,
    left: `${drawerWidth}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Footer = ({ open }) => {
    return (
        <FooterContainer>
            <Typography variant="body2" color="textSecondary">
                © 2024 Turbo Delivery
            </Typography>
            <Box ml={2}>
                <IconButton href="https://facebook.com" color="inherit">
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" color="inherit">
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" color="inherit">
                    <Instagram />
                </IconButton>
            </Box>
        </FooterContainer>
    );
};

Footer.propTypes = {
    open: PropTypes.bool,
};

export default Footer;
