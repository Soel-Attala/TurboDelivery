import { Container, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    return (
        <footer style={{ padding: '20px 0', textAlign: 'center', background: '#f5f5f5' }}>
            <Container>
                <Typography variant="body1">© 2024 Turbo Delivery</Typography>
                <div style={{ marginTop: '10px' }}>
                    <Link href="https://facebook.com" target="_blank" color="inherit">
                        <Facebook />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" color="inherit">
                        <Twitter />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" color="inherit">
                        <Instagram />
                    </Link>
                </div>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                    Contact: info@turbodelivery.com
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
