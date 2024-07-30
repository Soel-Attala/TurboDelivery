
import { Container, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(4),
        backgroundColor: '#3f51b5',
        color: '#fff',
    },
    socialIcons: {
        margin: theme.spacing(1),
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Typography variant="body1" align="center">
                    © 2024 Turbo Delivery. All rights reserved.
                </Typography>
                <div className={classes.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-icon.png" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/instagram-icon.png" alt="Instagram" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
