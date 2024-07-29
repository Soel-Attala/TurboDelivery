import { Container, Typography, Button } from '@mui/material';
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';

function Home() {
    return (
        <div>
            <NavBar />
            <Container>
                <Typography variant="h3" gutterBottom>
                    Welcome to Turbo Delivery!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Manage your orders and deliveries efficiently with our platform.
                </Typography>
                <Button href="/order-form" variant="contained" color="primary">Place an Order</Button>
                <Button href="/order-list" variant="contained" color="secondary">View Orders</Button>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;
