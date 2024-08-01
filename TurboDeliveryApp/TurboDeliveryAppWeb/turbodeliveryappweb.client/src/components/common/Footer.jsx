
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    backgroundColor: '#3f51b5',
    color: '#fff',
}));

const SocialIcons = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    '& a': {
        margin: theme.spacing(0.5),
    },
    '& img': {
        width: '24px',
        height: '24px',
    },
}));

function Footer() {
    return (
        <FooterContainer>
            <Container>
                <Typography variant="body1" align="center">
                    © 2024 Turbo Delivery. All rights reserved.
                </Typography>
                <SocialIcons>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-icon.png" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/instagram-icon.png" alt="Instagram" />
                    </a>
                </SocialIcons>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
